import _ from "lodash";
var u = require("./utils");

window.mxLanguages = window.mxLanguages || ["en"];

var sanitizer = require("sanitizer");
var mxgraph = require("mxgraph")({
  mxImageBasePath:
    "public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images",
  mxBasePath:
    "public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist",
  mxLoadStylesheets: false,
  mxLanguage: "en",
  mxLoadResources: false
});

window.BASE_PATH =
  window.BASE_PATH ||
  "public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist/";
window.RESOURCES_PATH = window.BASE_PATH || window.BASE_PATH + "resources";
window.RESOURCE_BASE =
  window.RESOURCE_BASE || window.RESOURCES_PATH + "/grapheditor";
window.STENCIL_PATH = window.STENCIL_PATH || window.BASE_PATH + "stencils";
window.IMAGE_PATH = window.IMAGE_PATH || window.BASE_PATH + "images";
window.STYLE_PATH = window.STYLE_PATH || window.BASE_PATH + "styles";
window.CSS_PATH = window.CSS_PATH || window.BASE_PATH + "styles";
window.mxLanguages = window.mxLanguages || ["en"];

// Put to global vars to work
window.mxActor = window.mxActor || mxgraph.mxActor;
window.mxArrow = window.mxArrow || mxgraph.mxArrow;
window.mxArrowConnector = window.mxArrowConnector || mxgraph.mxArrowConnector;
window.mxCell = window.mxCell || mxgraph.mxCell;
window.mxCellEditor = window.mxCellEditor || mxgraph.mxCellEditor;
window.mxCellHighlight = window.mxCellHighlight || mxgraph.mxCellHighlight;
window.mxCellOverlay = window.mxCellOverlay || mxgraph.mxCellOverlay;
window.mxCellRenderer = window.mxCellRenderer || mxgraph.mxCellRenderer;
window.mxCellState = window.mxCellState || mxgraph.mxCellState;
window.mxClient = window.mxClient || mxgraph.mxClient;
mxClient.mxBasePath =
  "public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist";
mxClient.mxImageBasePath =
  "public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images";
mxClient.mxLoadResources = true;
mxClient.mxLanguage = "en";
mxClient.mxLoadStylesheets = true;
window.mxCloud = window.mxCloud || mxgraph.mxCloud;
window.mxCodec = window.mxCodec || mxgraph.mxCodec;
window.mxCompactTreeLayout =
  window.mxCompactTreeLayout || mxgraph.mxCompactTreeLayout;
window.mxConnectionConstraint =
  window.mxConnectionConstraint || mxgraph.mxConnectionConstraint;
window.mxConnectionHandler =
  window.mxConnectionHandler || mxgraph.mxConnectionHandler;
window.mxConnector = window.mxConnector || mxgraph.mxConnector;
window.mxConstants = window.mxConstants || mxgraph.mxConstants;
window.mxConstraintHandler =
  window.mxConstraintHandler || mxgraph.mxConstraintHandler;
window.mxCylinder = window.mxCylinder || mxgraph.mxCylinder;
window.mxDefaultKeyHandler =
  window.mxDefaultKeyHandler || mxgraph.mxDefaultKeyHandler;
window.mxDefaultPopupMenu =
  window.mxDefaultPopupMenu || mxgraph.mxDefaultPopupMenu;
window.mxDefaultToolbar = window.mxDefaultToolbar || mxgraph.mxDefaultToolbar;
window.mxDivResizer = window.mxDivResizer || mxgraph.mxDivResizer;
window.mxDoubleEllipse = window.mxDoubleEllipse || mxgraph.mxDoubleEllipse;
window.mxDragSource = window.mxDragSource || mxgraph.mxDragSource;
window.mxEdgeStyle = window.mxEdgeStyle || mxgraph.mxEdgeStyle;
window.mxEdgeHandler = window.mxEdgeHandler || mxgraph.mxEdgeHandler;
window.mxEditor = window.mxEditor || mxgraph.mxEditor;
window.mxElbowEdgeHandler =
  window.mxElbowEdgeHandler || mxgraph.mxElbowEdgeHandler;
window.mxEllipse = window.mxEllipse || mxgraph.mxEllipse;
window.mxEvent = window.mxEvent || mxgraph.mxEvent;
window.mxEventObject = window.mxEventObject || mxgraph.mxEventObject;
window.mxFile = window.mxFile || mxgraph.mxFile;
window.mxGeometry = window.mxGeometry || mxgraph.mxGeometry;
window.mxGraph = window.mxGraph || mxgraph.mxGraph;
window.mxGraphHandler = window.mxGraphHandler || mxgraph.mxGraphHandler;
window.mxGraphModel = window.mxGraphModel || mxgraph.mxGraphModel;
window.mxGraphView = window.mxGraphView || mxgraph.mxGraphView;
window.mxGuide = window.mxGuide || mxgraph.mxGuide;
window.mxHexagon = window.mxHexagon || mxgraph.mxHexagon;
window.mxHandle = window.mxHandle || mxgraph.mxHandle;
window.mxImage = window.mxImage || mxgraph.mxImage;
window.mxImageShape = window.mxImageShape || mxgraph.mxImageShape;
window.mxKeyHandler = window.mxKeyHandler || mxgraph.mxKeyHandler;
window.mxLabel = window.mxLabel || mxgraph.mxLabel;
window.mxLayoutManager = window.mxLayoutManager || mxgraph.mxLayoutManager;
window.mxLine = window.mxLine || mxgraph.mxLine;
window.mxMarker = window.mxMarker || mxgraph.mxMarker;
window.mxOutline = window.mxOutline || mxgraph.mxOutline;
window.mxPanningHandler = window.mxPanningHandler || mxgraph.mxPanningHandler;
window.mxPerimeter = window.mxPerimeter || mxgraph.mxPerimeter;
window.mxPoint = window.mxPoint || mxgraph.mxPoint;
window.mxPolyline = window.mxPolyline || mxgraph.mxPolyline;
window.mxPopupMenu = window.mxPopupMenu || mxgraph.mxPopupMenu;
window.mxPopupMenuHandler =
  window.mxPopupMenuHandler || mxgraph.mxPopupMenuHandler;
window.mxPrintPreview = window.mxPrintPreview || mxgraph.mxPrintPreview;
window.mxRectangle = window.mxRectangle || mxgraph.mxRectangle;
window.mxRectangleShape = window.mxRectangleShape || mxgraph.mxRectangleShape;
window.mxResources = window.mxResources || mxgraph.mxResources;
window.mxRhombus = window.mxRhombus || mxgraph.mxRhombus;
window.mxRubberband = window.mxRubberband || mxgraph.mxRubberband;
window.mxShape = window.mxShape || mxgraph.mxShape;
window.mxStackLayout = window.mxStackLayout || mxgraph.mxStackLayout;
window.mxStencil = window.mxStencil || mxgraph.mxStencil;
window.mxStencilRegistry =
  window.mxStencilRegistry || mxgraph.mxStencilRegistry;
window.mxStylesheet = window.mxStylesheet || mxgraph.mxStylesheet;
window.mxStyleRegistry = window.mxStyleRegistry || mxgraph.mxStyleRegistry;
window.mxSvgCanvas2D = window.mxSvgCanvas2D || mxgraph.mxSvgCanvas2D;
window.mxSwimlane = window.mxSwimlane || mxgraph.mxSwimlane;
window.mxText = window.mxText || mxgraph.mxText;
window.mxToolbar = window.mxToolbar || mxgraph.mxToolbar;
window.mxTriangle = window.mxTriangle || mxgraph.mxTriangle;
window.mxUndoManager = window.mxUndoManager || mxgraph.mxUndoManager;
window.mxUtils = window.mxUtils || mxgraph.mxUtils;
window.mxValueChange = window.mxValueChange || mxgraph.mxValueChange;
window.mxVertexHandler = window.mxVertexHandler || mxgraph.mxVertexHandler;

export default class MxPluginCtrl {
  /** @ngInject */
  constructor($scope, elem, attrs, ctrl) {
    this.$scope = $scope;
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.$graphCanvas;
    this.container;
    this.$elem = elem.find(".flowchart-panel__chart");
    this.graph;
    this.cells = [];

    // Static
    this.STYLE_FILLCOLOR = mxConstants.STYLE_FILLCOLOR;
    this.STYLE_FONTCOLOR = mxConstants.STYLE_FONTCOLOR;
    this.STYLE_STROKECOLOR = mxConstants.STYLE_STROKECOLOR;

    this.initFlowchart();

    // Events Render
    ctrl.events.on("render", () => {
      this.render();
    });
  }

  // ####################################### FLOWCHART #############################################

  reset() {
    this.addFlowchart();
    this.inspectFlowChart();
    this.updateFlowChart();
    this.refreshFlowChart();
  }

  //
  // INIT
  //
  initFlowchart() {
    // definie object graph
    this.$graphCanvas = $("<div></div>");
    this.$elem.html(this.$graphCanvas);
    this.$graphCanvas.bind("plothover", function(event, pos, item) {
      if (!item) {
        $tooltip.detach();
        return;
      }
    });

    var Graph = require("./Graph")({
      // touch: "1",
      libs: "arrows;basic;bpmn;flowchart"
    });
    var Shapes = require("./Shapes");

    this.container = this.$graphCanvas[0];
    this.graph = new Graph(this.container);

    // Test Event
    this.graph.click = this.eventGraph.bind(this);
  }

  //
  // ADD OR REPLACE GRAPH
  //
  addFlowchart() {
    // console.debug("mxgraph.addFlowChart");
    this.graph.getModel().beginUpdate();
    this.graph.getModel().clear();
    try {
      let text = this.panel.flowchart.source.xml.value;
      if (this.isencodedXml()) text = u.decode(text, true, true, true);
      let xmlDoc = mxUtils.parseXml(text);
      let codec = new mxCodec(xmlDoc);
      codec.decode(xmlDoc.documentElement, this.graph.getModel());
    } catch (error) {
      console.error("Error in draw :", error);
    } finally {
      // Updates the display
      this.graph.getModel().endUpdate();
    }
  }

  //
  // REFRESH GRAPH
  //
  refreshFlowChart() {
    console.debug("mxgraph.refreshFlowChart");
    var width = this.$elem.width();
    var height = this.panelCtrl.height;
    var size = Math.min(width, height);

    // For center Graph
    var graphCss = {
      margin: "auto",
      position: "relative",
      // paddingBottom: 20 + "px",
      height: size - 30 + "px"
    };

    this.$graphCanvas.css(graphCss);

    // LOCK
    if (this.panel.flowchart.options.lock) this.lockGraph();
    else this.unlockGraph();

    // GRID
    this.gridGraph();

    // Zoom
    this.zoomGraph();

    // Fit/scale
    this.scaleGraph();

    // CENTER
    this.centerGraph();

    // BG Color
    this.bgGraph();

    // REFRESH GRAPH
    this.graph.refresh();
  }

  //
  // INSPECT
  //
  inspectFlowChart() {
    this.cells = this.getCellsFromOriginal(this.graph);
  }

  //
  // UPDATE for data
  //
  updateFlowChart() {
    this.updateStateForShape(this.panelCtrl.shapeStates, this.cells);
    this.updateStateForText(this.panelCtrl.textStates, this.cells);
  }

  //
  //GRAPH HANDLER
  //

  eventGraph(me) {
    var self = this;
    let id = null;
    let state = me.getState();
    // if on Cell
    if (me.state != undefined && me.state != null) {
      id = state.cell.id;
      // if mapping activate
      if (self.panelCtrl.onMapping.active) {
        self.panelCtrl.onMapping.active = false;
        self.panelCtrl.onMapping.object.pattern = id;
        self.$scope.$apply();
        setTimeout(function() {
          $("#" + self.panelCtrl.onMapping.idFocus).focus();
        }, 100);
      } else {
        // search link
        _.each(self.panelCtrl.linkStates, _link => {
          const regex = this.stringToJsRegex(_link.pattern);
          let matching = id.toString().match(regex);
          if (_link.pattern == id || matching) {
            if(_link.linkTargetBlank) {
              let win = window.open(_link.linkUrl, '_blank');
              win.focus();
            }
            else {
              let win = window.open(_link.linkUrl, '_self');
              win.focus();
            }
          }
        });
      }
    }
  }

  focusContainer() {
    this.container.focus();
  }

  gridGraph() {
    if (this.panel.flowchart.options.grid) {
      this.container.style.backgroundImage =
        "url('" + IMAGE_PATH + "/grid.gif')";
    } else {
      this.container.style.backgroundImage = "";
    }
  }

  bgGraph() {
    if (this.panel.flowchart.options.bgColor) {
      this.$elem.css("background-color", this.panel.flowchart.options.bgColor);
    } else {
      this.$elem.css("background-color", "");
    }
  }

  centerGraph() {
    if (this.panel.flowchart.options.center) {
      this.graph.center(true, true);
    } else {
      this.graph.center(false, false);
    }
  }

  scaleGraph() {
    if (this.panel.flowchart.options.scale) {
      this.graph.fit();
      this.graph.view.rendering = true;
    }
  }

  zoomGraph() {
    if (
      this.panel.flowchart.options.zoom ||
      this.panel.flowchart.options.zoom.length > 0 ||
      this.panel.flowchart.options.zoom != "100%" ||
      this.panel.flowchart.options.zoom != "0%"
    ) {
      let scale = _.replace(this.panel.flowchart.options.zoom, "%", "") / 100;
      this.graph.zoomTo(scale, true);
    } else {
      if (!this.panel.flowchart.options.scale) this.graph.zoomActual();
    }
  }

  lockGraph() {
    // LOCK
    // Disables folding
    this.graph.setEnabled(false);
    // this.graph.isCellFoldable = function (cell, collapse) {
    //   return false;
    // };
  }

  unlockGraph() {
    // LOCK
    // Disables folding
    this.graph.setEnabled(true);
    // this.graph.isCellFoldable = function (cell, collapse) {
    //   return true;
    // };
  }

  getCurrentCell(reg_name, prop_name) {
    //TODO:
  }

  // getAllsCells : return cells and status of current graph
  // only for stock original states and colors when source changed
  getCellsFromOriginal(graph) {
    let model = graph.getModel();
    let view = graph.view;
    let allCells = [];
    let cells = model.cells;
    _.forEach(cells, _cell => {
      let cell = {
        id: _cell.getId(),
        // 'cell': _cell,
        value: _cell.getValue(),
        text:
          view.getState(_cell).text != null
            ? view.getState(_cell).text.lastValue
            : "",
        shape: view.getState(_cell).style[mxConstants.STYLE_SHAPE],
        fontColor: view.getState(_cell).style[mxConstants.STYLE_FONTCOLOR],
        fillColor: view.getState(_cell).style[mxConstants.STYLE_FILLCOLOR],
        strokeColor: view.getState(_cell).style[mxConstants.STYLE_STROKECOLOR],
        isEdge: _cell.isEdge(),
        isVertex: _cell.isVertex(),
        level: -1
      };
      allCells.push(cell);
    });
    return allCells;
  }

  //
  // EVENTS
  //
  selectCell(id) {
    const model = this.graph.getModel();
    const cell = model.getCell(id);
    this.graph.setSelectionCell(cell);
  }

  unselectCell() {
    this.graph.clearSelection();
  }

  encodeXml() {
    if (!this.isencodedXml()) {
      this.panel.flowchart.source.xml.value = u.encode(
        this.panel.flowchart.source.xml.value,
        true,
        true,
        true
      );
    }
  }

  decodeXml() {
    if (this.isencodedXml()) {
      this.panel.flowchart.source.xml.value = u.decode(
        this.panel.flowchart.source.xml.value,
        true,
        true,
        true
      );
    }
  }

  isencodedXml() {
    return u.isencoded(this.panel.flowchart.source.xml.value);
  }

  //
  // Functions
  //

  // Update Color of Graph
  updateStateForShape(shapeStates, cells) {
    _.each(cells, _cell => {
      // define found for each color
      let found = false;
      _.each(shapeStates, _shape => {
        const regex = this.stringToJsRegex(_shape.pattern);
        const matching = _cell.id.toString().match(regex);
        // if prop or id
        if (_shape.pattern == _cell.id || matching) {
          // console.debug("updateStateForShape|matching : ", _shape, _cell);
          found = true;
          if (_shape.level != -1) {
            this.restoreColor(_cell.id);
            this.changeColor(_cell.id, _shape.color, _shape.colorMode);
          } else if (_cell.level != -1) {
            this.restoreColor(_cell.id);
          }
          _cell.level = _shape.level;
        }
      });
      if (!found) {
        if (_cell.level != -1) {
          this.restoreColor(_cell.id);
          _cell.level = -1;
        }
      }
    });
  }

  // Update text of Graph
  updateStateForText(textStates, cells) {
    _.each(cells, _cell => {
      let found = false;
      _.each(textStates, _text => {
        let textValue = _text.textValue;
        const regexText = this.stringToJsRegex(_text.pattern);
        const matching = _cell.id.toString().match(regexText);
        if (_text.pattern == _cell.id || matching) {
          // console.debug("updateStateForText|matching : ", _text, _cell);
          found = true;
          if (_text.isPattern) {
            const regexVal = this.stringToJsRegex(_text.textPattern);
            if (_cell.value.toString().match(regexVal)) {
              textValue = _cell.value.toString().replace(regexVal, textValue);
            }
          }
          this.changeText(_cell.id, textValue);
        }
      });
      if (!found) {
        this.changeText(_cell.id, _cell.value);
      }
    });
  }

  // Change text of shape
  changeText(id, value) {
    let model = this.graph.getModel();
    let cell = model.getCell(id);
    if (cell) {
      model.setValue(cell, value);
    }
  }

  // Change color of shape
  changeColor(id, color, style) {
    if (style) {
      let model = this.graph.getModel();
      let cell = model.getCell(id);
      if (cell) {
        this.graph.setCellStyles(style, color, [cell]);
      }
    }
  }

  // Restore color of shape
  restoreColor(id) {
    let cell = this.graph.getModel().getCell(id);
    const old = _.find(this.cells, {
      id: id
    });
    if (old) {
      this.graph.setCellStyles(this.STYLE_FILLCOLOR, old.fillColor, [cell]);
      this.graph.setCellStyles(this.STYLE_FONTCOLOR, old.fontColor, [cell]);
      this.graph.setCellStyles(this.STYLE_STROKECOLOR, old.strokeColor, [cell]);
    }
  }

  // Return array of cell id by regex
  getCellNamesByRegEx(regexString) {
    const regexText = this.stringToJsRegex(regexString);
    if (!this.cells) {
      return [];
    }
    return _.find(this.cells, c => {
      return c.id.toString().match(regexText);
    });
  }

  // ###################################################################################################

  //
  // RENDER
  //

  render() {
    // Source Changed
    if (this.panelCtrl.changedSource == true) {
      this.panelCtrl.changedSource = false;
      this.addFlowchart();
      this.inspectFlowChart();
    }

    // Data Changed or mapping changed
    if (
      this.panelCtrl.changedData == true ||
      this.panelCtrl.changedOptions == true
    ) {
      this.panelCtrl.changedData = false;
      this.panelCtrl.changedOptions = false;
      this.updateFlowChart();
    }

    // Option (scale, center, ..) changed
    this.refreshFlowChart();
  }

  noDataPoints() {
    var html =
      '<div class="datapoints-warning"><span class="small">No data points</span></div>';
    this.$elem.html(html);
  }

  //
  // Utils
  //
  stringToJsRegex(str) {
    if (str[0] !== "/") {
      return new RegExp("^" + str + "$");
    }
    const match = str.match(new RegExp("^/(.*?)/(g?i?m?y?)$"));
    return new RegExp(match[1], match[2]);
  }

  // decodeXml(data) {
  //   return u.decode(data,true,true,true);
  // }
}
