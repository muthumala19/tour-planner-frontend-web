import NoDataToDisplay from "./no_data";

export default function JourneysScreen({journeys}) {
    return (
        journeys.length === 0 ? <div>
            <NoDataToDisplay/>
        </div> : null
    );
}