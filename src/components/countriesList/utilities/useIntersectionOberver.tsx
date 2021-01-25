import { useIntersectionObserverProps } from '../constants/types';

const useIntersectionObserver: useIntersectionObserverProps = ({
  isIntersectingCallback,
  unObserveAfterIntersect,
  root,
}) => {
  const objectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersectingCallback(entry);
          if (unObserveAfterIntersect) {
            objectObserver.unobserve(entry.target);
          }
        }
      });
    },
    {
      root,
    }
  );

  return objectObserver;
};

export default useIntersectionObserver;
