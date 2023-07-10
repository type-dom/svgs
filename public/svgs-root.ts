import {TypeRoot, TextNode, Division, Br, IStyle} from 'type-dom.ts';
import { AddSvg } from '../src/add/add';
import { AttachmentSvg } from '../src/attachment/attachment';
import { CheckboxSvg } from  '../src/checkbox/checkbox';
import { CloseSvg } from '../src/close/close';
import { ConnectionSvg } from '../src/connetion/connection';
import { DateSvg } from '../src/date/date';
import { DeleteSvg } from '../src/delete/delete';
import { MultilineInputSvg } from '../src/multiline-input/multiline-input';
import { NumericalSvg } from '../src/numerical/numerical';
import { RadioSvg } from '../src/radio/radio';
import { SelectSvg } from '../src/select/select';
import { SingleInputSvg } from '../src/single-input/single-input';
import { TableSvg } from '../src/table/table';
import { ThreeDotsSvg } from '../src/three-dots/three-dots';
import { TimeSvg } from '../src/time/time';
import { TriangleSvg } from '../src/triangle/triangle';
import {AlarmClockSvg} from "../src/element-plus";
/**
 * 应用根节点，必须存在。
 * 应用继承 TypeRoot;
 * 因为属性和方法要全局调用，所以全部设置为静态 static; 包括get也设置为静态
 * UI组件显示页面
 */
export class SVGSRoot extends TypeRoot {
  className: 'SVGSRoot';
  constructor(editorEl: HTMLElement) {
    super(editorEl);
    console.log('SVGSView constructor . ');
    this.className = 'SVGSRoot';
    this.addStyleObj({
      padding: '30px'
    });
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd',
    }
    this.createItems(this, [
      {
        TypeClass: Division,
        childNodes: [
          {
            TypeClass: AlarmClockSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: AddSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: AttachmentSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: CheckboxSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: CloseSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: ConnectionSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: DateSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: DeleteSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: MultilineInputSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: NumericalSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: RadioSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: SelectSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: SingleInputSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: TableSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: ThreeDotsSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: TimeSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },
          {
            TypeClass: TriangleSvg,
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
                fill: '#000'
              },
              styleObj: $svgStyle
            }
          },
        ]
      },
      {
        TypeClass: Br
      }
    ]);
    this.render();
  }
}
