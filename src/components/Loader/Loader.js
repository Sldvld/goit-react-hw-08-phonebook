import { TailSpin } from 'react-loader-spinner';
export default function Loader() {
  return (
    <TailSpin
      height="12"
      width="12"
      color="#3f51b5"
      ariaLabel="tail-spin-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      radius="1"
      wrapperClass=""
      visible={true}
    />
  );
}
