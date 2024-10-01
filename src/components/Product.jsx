import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

function Product() {
  const { id, name } = useParams();

  return (
    <>
      <div className="border-2 p-4 border-red-500 rounded-md bg-emre-500 hover:bg-violet-600 hover:cursor-pointer dark:bg-red-800 mt-8 md:bg-green-500">
        {' '}
        <h1 className="text-3xl font-bold ">Merhaba {name + ' ' + id}</h1>
        <p>
          Bu sayfayı{' '}
          {formatDistanceToNow('2024-09-17 11:31:00', {
            addSuffix: true,
            locale: tr,
          })}{' '}
          kodladık.
        </p>
        <p>
          Bu sayfaya dark mode'u{' '}
          {formatDistanceToNow('2024-09-18 10:30:00', {
            addSuffix: true,
            locale: tr,
          })}{' '}
          ekledik.
        </p>
      </div>
    </>
  );
}

export default Product;
