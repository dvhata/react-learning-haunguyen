// export default class BareInput extends Component {
//   render() {
//     return <input {...this.props} />;
//   }
// }

export default function BareInput({ type, ...res }) {
  return <input {...res} />;
}
