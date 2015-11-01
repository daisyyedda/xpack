<h1>xpack</h1>
An algorithm conducts circle packing by best satisfying node horizontal constraints of input data items. It also aggregates data points below a threshold into streamline ribbons above and below the packed circles. 

The algorithm was used in generating the conversational thread visualization in a journal paper: <a href="http://www.cs.toronto.edu/~jianzhao/papers/fluxflow.pdf">J. Zhao, N. Cao, Z. Wen, Y. Song, Y.-R. Lin, and C. Collins, #FluxFlow: Visual Analysis of Anomalous Information Spreading on Social Media, IEEE Transactions on Visualization and Computer Graphics (Proceedings of VAST 2014), 20(12), pp. 1773-1782, Dec 2014.</a>

<img src="http://www.cs.toronto.edu/~jianzhao/snapshots/fluxflow.png" />

<h2>xpack()</h2>
Creates a new pack layout with the default settings.

<h2>xpack.xpos([<i>xpos</i>])</h2>
If <i>xpos</i> is specified, sets the accessor to the specified function. If <i>xpos</i> is not specified, returns the current accessor, which assumes that the input data is an object with a numeric <i>x</i> attribute.

<h2>xpack.radius([<i>radius</i>])</h2>
If <i>radius</i> is specified, sets the accessor to the specified function. If <i>radius</i> is not specified, returns the current accessor, which assumes that the input data is an object with a numeric <i>r</i> attribute.

<h2>xpack.xpack(<i>data</i>, <i>packscore</i>)</h2>
Runs the pack layout that represents all the input <i>data</i> items above the <i>packscore</i> as circles by best satisfying their horizontal constraints, returning an object with the following information. <br />
<i>nodes</i> - the packed nodes with <i>px</i> and <i>py</i> as their positions; <br />
<i>rect</i> - the bounding box of the layout: {<i>xMin</i>, <i>xMax</i>, <i>yMin</i>, <i>yMax</i>}; <br />
<i>outline</i> - the upper and lower border nodes of the packed layout: {<i>up</i>, <i>down</i>}.
