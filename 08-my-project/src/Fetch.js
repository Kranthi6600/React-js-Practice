import { useEffect, useState } from "react";

export default function Fetch({
    uri,
    renderSuccess,
    renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>,
    renderLoading = () => <p>Loading...</p>
}) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!uri) return;

        setLoading(true);
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [uri]);

    if (loading) return renderLoading();
    if (error) return renderError(error);
    if (data) return renderSuccess({ data });

    return null;
}
