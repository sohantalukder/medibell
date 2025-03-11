import React, {useState} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import {globalStyles} from '../../assets/styles/global.style.asset';
import Container from '../../layout/Container.layout';
import EmptyContent from '../empty-content/EmptyContent.component';
import WebViewHeader from './WebViewHeader';
import {webViewStyle} from './style';
// import {messages} from '../../controllers/api/root-api-handler/const.root-api';
type Route = {
  params: {
    title?: string;
    url?: string;
  };
};
const CustomWebView: React.FC<{route: Route}> = ({
  route: {params: {title = '', url = ''} = {}} = {},
}) => {
  const [loading, setLoading] = useState(0);
  const styles = webViewStyle;
  return (
    <Container>
      <WebViewHeader loading={loading} title={title} url={url} />
      <View style={[styles.relative, globalStyles.flex1]}>
        {url && (
          <WebView
            source={{uri: url}}
            style={globalStyles.flex1}
            onLoadProgress={({nativeEvent}: {nativeEvent: any}) => {
              setLoading(nativeEvent.progress);
            }}
            onError={() => {}}
            renderError={() => (
              <View style={globalStyles.centerView}>
                <EmptyContent text={'No URL Found!'} />
              </View>
            )}
          />
        )}
      </View>
    </Container>
  );
};
export default CustomWebView;
