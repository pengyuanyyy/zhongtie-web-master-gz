
import useTabs1HomeStore from './modules/tabs1Home'
import useTabs2SceneDisplayStore from './modules/tabs2SceneDisplay'
import useTabs3ProjectTrackingStore from './modules/tabs3ProjectTracking'
import useTabs4EmulationStore from './modules/tabs4Emulation'

import useLayoutStore from "./modules/layout";
import useappFlexLeftStore from "./modules/appFlexLeft";

export default function useStore() {
    return {

        tabs1Home: useTabs1HomeStore(),
        tabs2SceneDisplay: useTabs2SceneDisplayStore(),
        tabs3ProjectTracking: useTabs3ProjectTrackingStore(),
        tabs4Emulation: useTabs4EmulationStore(),
        layout:useLayoutStore(),
        appFlexLeft:useappFlexLeftStore()
    }
}