import * as React from "react";
import LocationActionDispatcher from "../actions/LocationActionDispatcher";
import NavigationActionDispatcher from "../../navigation/actions/NavigationActionDispatcher";

export class LocationComponent extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                <h2 className={"subtitle"}>
                    Locations
                </h2>
                <button onClick={LocationActionDispatcher.fetchLocations}>Fetch</button>
                <button onClick={() => NavigationActionDispatcher.navigateTo("/about")}>About</button>
                <button onClick={NavigationActionDispatcher.goBack}>Back</button>
                <button onClick={NavigationActionDispatcher.goForward}>Forward</button>
            </div>
        );
    }
}
