import type { BaseService } from "../index.js";
import type { BaseServiceConstructor } from "../services/BaseServiceConstructor.js";
import type { Promisify } from "../types/Promisify.js";
import type { ApiResponse } from "./ApiResponse.js";

/**
 * ⛔️ Because Typescript does not support type injection (ie passing a generic as a generic paremeter),
 * we can't be DRY and this code has to be repeated for every Api.ts + ApiStoreProxy.ts file.
 * If you have to modify Api.ts or any ApiStoreProxy.ts of the compatible front-end frameworks,
 * please make sure to modify all other Api.ts and ApiStoreProxy.ts files.
 */

/**
 * Transforms a type into a callable type:
 * - the return of functions are promisified
 * - values are transformed into functions with no argument that return a promise of the value
 * with nested capabilities
 */
type Callable<Type> = Type extends (
	...args: infer Parameters
) => infer ReturnType
	? (...args: Parameters) => Promisify<ApiResponse<ReturnType>>
	: Type extends any[]
	? Array<() => Promise<ApiResponse<Type[number]>>> &
			(() => Promise<ApiResponse<Type>>)
	: Type extends
			| Set<any>
			| Map<any, any>
			| RegExp
			| String
			| Number
			| BigInt
			| Boolean
			| Date
			| ArrayBuffer
	? () => Promise<ApiResponse<Type>>
	: Type extends object
	? { [Key in keyof Type]: Callable<Type[Key]> }
	: () => Promise<ApiResponse<Type>>;

type ExposedProperties<Service extends BaseService> = {
	[Key in Exclude<
		keyof Service,
		"context" | `${"$" | "_"}${string}`
	>]: Callable<Service[Key]>;
};

export type Api<Services extends Record<string, BaseServiceConstructor>> = {
	[Key in keyof Services]: ExposedProperties<InstanceType<Services[Key]>>;
};
