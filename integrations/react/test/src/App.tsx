import { useEffect, useMemo, useState } from "react";
import { api } from "./api";
import { Coco } from "./components/Coco";
import { RequestCard } from "./components/RequestCard";
import { Zabu } from "./components/Zabu";

function App() {
	console.log("App is called");
	// const [count, setCount] = useState(0);
	// const [storeCount, setStoreCount] = getStore("zabu");
	const [a, setA] = useState(2);
	const [b, setB] = useState(3);

	const [isApiLoading, setIsApiLoading] = useState(true);
	const [apiData, setApiData] = useState<number>();
	const [apiError, setApiError] = useState<Error>();

	useMemo(() => {
		setIsApiLoading(true);
		setApiData(undefined);
		setApiError(undefined);
		api.math.add(a, b).then(({ error, data }) => {
			setIsApiLoading(false);
			if (error) setApiError(error);
			else setApiData(data);
		});
	}, [a, b]);

	return (
		<>
			<p>
				a = <input value={a} onChange={(e) => setA(Number(e.target.value))} />
			</p>
			<p>
				b = <input value={b} onChange={(e) => setB(Number(e.target.value))} />
			</p>

			<RequestCard
				title="Api sum"
				loading={isApiLoading}
				refreshing={isApiLoading}
				data={apiData}
				error={apiError}
			/>
		</>
	);
}

export default App;
