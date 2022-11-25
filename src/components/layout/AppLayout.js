import React from 'react';
import { createPlotlyRenderers, PivotTableUI, TableRenderers } from '@imc-trading/react-pivottable';
import '@imc-trading/react-pivottable/pivottable.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const AppLayout = () => {
  const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
  const PlotlyRenderers = createPlotlyRenderers(Plot); // or createPlotlyRenderers(window.Plotly)
  const [pivottableState, setPivottableState] = useState({});
  const data = [
    ['attribute', 'attribute2'],
    ['value1', 'value2'],
  ];

  return (
    <div>
      <PivotTableUI
        data={data}
        onChange={(s) => setPivottableState(s)}
        renderers={{ ...TableRenderers, ...PlotlyRenderers }}
        {...pivottableState}
      />
    </div>
  );
};

export default AppLayout;
