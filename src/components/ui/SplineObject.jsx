import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineObject = () => {
  return (
    <div className="spline-container relative">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><p>Loading 3D model...</p></div>}>
        <Spline scene="https://prod.spline.design/Wk5Xn1A8Tf3u43x6/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default SplineObject;