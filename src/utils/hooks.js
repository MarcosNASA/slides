import * as React from 'react';
import { useHistory } from 'react-router-dom';

const useLatestRef = (value) => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};

const DEFAULT_OPTIONS = {};
const useAddEventListener = ({
  eventTarget = window,
  eventType,
  eventHandler,
  options = DEFAULT_OPTIONS,
}) => {
  const eventHandlerRef = useLatestRef(eventHandler);
  const optionsRef = useLatestRef(options);
  React.useEffect(() => {
    const handler = (event) => eventHandlerRef.current(event);
    const options = optionsRef.current;
    eventTarget.addEventListener(eventType, handler, options);
    return () => {
      eventTarget.removeEventListener(handler, options);
    };
  }, [eventHandlerRef, eventTarget, eventType, optionsRef]);
};

export const useSlides = ({ path, numberOfSlides, rootPath = '/' }) => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  const { groups: { currentSlide } = {} } =
    /slide\/(?<currentSlide>\d+)/.exec(pathname) || {};

  React.useEffect(() => {
    if (!currentSlide) history.push(`${path}/slide/1`);
  });

  const previousSlide = Number(currentSlide) - 1 || rootPath;
  const nextSlide = Number(currentSlide) + 1;

  return {
    previousSlide:
      previousSlide >= 1 ? `${path}/slide/${previousSlide}` : rootPath,
    currentSlide: `${path}/slide/${currentSlide}`,
    nextSlide:
      nextSlide <= numberOfSlides ? `${path}/slide/${nextSlide}` : rootPath,
  };
};

export const useKeyboardNavigation = ({ nextSlide, previousSlide }) => {
  const history = useHistory();

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      history.push(previousSlide);
    }
    if (event.key === 'ArrowRight') {
      history.push(nextSlide);
    }
  };

  useAddEventListener({ eventHandler: handleKeyDown, eventType: 'keydown' });
};
