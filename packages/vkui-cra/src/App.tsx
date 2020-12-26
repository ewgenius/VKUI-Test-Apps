import React, { useState } from "react";
import {
  AppRoot,
  CellButton,
  Group,
  Panel,
  PanelHeader,
  Root,
  SplitCol,
  SplitLayout,
  View,
} from "@vkontakte/vkui";

function App() {
  const [activeView, setActiveView] = useState("view1");
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol animate>
          <Root activeView={activeView}>
            <View activePanel="panel1.1" id="view1">
              <Panel id="panel1.1">
                <PanelHeader>View 1</PanelHeader>
                <Group>
                  <CellButton onClick={() => setActiveView("view2")}>
                    Open View 2
                  </CellButton>
                </Group>
              </Panel>
            </View>
            <View activePanel="panel2.1" id="view2">
              <Panel id="panel2.1">
                <PanelHeader>View 2</PanelHeader>
                <Group>
                  <CellButton onClick={() => setActiveView("view1")}>
                    Back to View 1
                  </CellButton>
                </Group>
              </Panel>
            </View>
          </Root>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
