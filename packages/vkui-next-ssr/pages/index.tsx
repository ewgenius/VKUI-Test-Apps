import Head from "next/head";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitCol,
  SplitLayout,
  View,
  Panel,
  PanelHeader,
  Group,
  ActionSheet,
  ActionSheetItem,
  withAdaptivity,
  AdaptivityProps,
  ViewWidth,
  ANDROID,
} from "@vkontakte/vkui/dist/es6";
import { useRef } from "react";

export const App = withAdaptivity(
  ({ viewWidth }: AdaptivityProps) => {
    const isDesktop = viewWidth > ViewWidth.MOBILE;
    return (
      <SplitLayout header={<PanelHeader separator={false} />} style={{ justifyContent: "center" }}>
        {isDesktop && (
          <SplitCol key="1" fixed width="280px" maxWidth="280px">
            <Panel>
              <PanelHeader />
              <Group>test</Group>
            </Panel>
          </SplitCol>
        )}

        <SplitCol
          key="2"
          animate={!isDesktop}
          spaced={isDesktop}
          width={isDesktop ? "560px" : "90%"}
          maxWidth={isDesktop ? "560px" : "100%"}
        >
          <View activePanel="1">
            <Panel id="1">
              <PanelHeader>Test</PanelHeader>
            <Group>
              test content
            </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    );
  },
  {
    viewWidth: true,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>VKUI (SSR)</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ConfigProvider isWebView={true} platform={ANDROID}>
        <AdaptivityProvider>
          <AppRoot>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </>
  );
}
