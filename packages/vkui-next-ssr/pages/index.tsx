import Head from "next/head";
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, View, Panel, PanelHeader } from "@vkontakte/vkui";

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
      <ConfigProvider isWebView={true}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout>
              <SplitCol>
                <View activePanel="1">
                  <Panel id="1">
                    <PanelHeader>Test</PanelHeader>
                  </Panel>
                </View>
              </SplitCol>
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </>
  );
}
