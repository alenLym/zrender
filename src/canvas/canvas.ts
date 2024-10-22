import {registerPainter} from '../zrender';
import Painter from './Painter';
// 注册画布渲染器
registerPainter('canvas', Painter);
