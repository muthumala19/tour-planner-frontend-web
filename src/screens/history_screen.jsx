import NoDataToDisplay from "./no_data";

export default function HistoryScreen({history}) {
    return (
        history.length === 0 ? <div>
            <NoDataToDisplay/>
        </div> : null
    )
}