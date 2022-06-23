import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#13C2C2',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: ' TMS',
  pwa: false,
  logo: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a9ae5742b84488bafacd86b2eee71ab~tplv-k3u1fbpfcp-watermark.image',
  iconfontUrl: '',
};

export default Settings;
