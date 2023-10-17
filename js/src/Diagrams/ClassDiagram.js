/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');
  var _controller = new mxCell('Controller', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');


  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;
  _controller.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [



  

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 30, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlActor;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'ActorLifeline');
    }),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Lifeline', new mxGeometry(0, 0, 70, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Lifeline');
    }),


    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 50, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlBoundary;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Boundary Lifeline');
    }),


    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 40, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlControl;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Control Lifeline');
    }),


    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 50, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlEntity;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Entity Lifeline');
    }),


    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Frame', new mxGeometry(0, 0, 160, 90),
        'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Frame');
    }),


    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 30, 30),
        'shape=umlDestroy;whiteSpace=wrap;html=1;strokeWidth=3;targetShapes=umlLifeline;'
        );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Destruction');
    }),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 15, 70),
        'html=1;points=[[0,0,0,0,5],[0,1,0,0,-5],[1,0,0,0,5],[1,1,0,0,-5]];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Frame');
    }),

    


    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;curved=0;rounded=0;', 160, 0, 'dispatch', 'Found Message', null, 'uml generalization extend'),

    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;', 160, 0, 'dispatch', 'Message', null, 'uml generalization extend'),
    
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;', 160, 0, 'return', 'Return', null, 'uml generalization extend'),

    
    
    // sb.addEntry(dt + 'object instance', function () {
    //   var cell = new mxCell(
    //     'Software System\nExisting System', new mxGeometry(0, 0, 160, 90),
    //     'html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;fillColor=#999999;fontColor=#FFFFFF;fontFamily=Helvetica;componentName=class;strokeWidth=2;'
    //   );
    //   cell.vertex = true;
    //   return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Software System, Existing System');
    // }),

    
  ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);

};

module.exports = addClassDiagramPalette;