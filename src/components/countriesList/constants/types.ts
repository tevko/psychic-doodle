export type CountryRowProps = {
  capital: string;
  name: string;
  alpha2Code: string;
  observer: IntersectionObserver | null;
};

export type useIntersectionObserverProps = (arg0: {
  isIntersectingCallback: (entry: IntersectionObserverEntry) => void;
  unObserveAfterIntersect: boolean;
  root: HTMLElement;
}) => IntersectionObserver;
