# Untitled Grid

Untitled grid can be a standard 12 column grid system or a versatile grid utility.

## Usage

```
npm install untitled-grid
```

or

```
yarn add untitled-grid
```

## Auto columns

Evenly distribute items in a row without props.

```
<Row>
  <Col></Col>
  <Col></Col>
  <Col></Col>
</Row>
```

## Responsive properties

All properties are applied within breakpoint props.

Breakpoints are mobile first, so the xs prop will apply to all sizes, until larger breakpoint is used.

You can also use custom breakpoints.

Use the span property to define the width of cols.

```
<Row>
  <Col
    xs={{ span: 12 }}
    sm={{ span: 6 }}
    md={{ span: 4 }}
    lg={{ span: 2 }}
  ></Col>
  ...
</Row>
```

## Justify

Justify items in a row to the left, right, or center.

```
<Row xs={{ justify: "start" }}>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 2 }}></Col>
</Row>
<Row xs={{ justify: "center" }}>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 2 }}></Col>
</Row>
<Row xs={{ justify: "end" }}>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 2 }}></Col>
</Row>
```

## Align

The height of a row is always determined by the content. Where the height differs, align other items to the top, middle or bottom of a row.

```
<Row xs={{ justify: "top" }}>
  <Col></Col>
  <Col></Col>
  <Col></Col>
</Row>
  <Row xs={{ justify: "middle" }}>
  <Col></Col>
  <Col></Col>
  <Col></Col>
</Row>
  <Row xs={{ justify: "bottom" }}>
  <Col></Col>
  <Col></Col>
  <Col></Col>
</Row>
```

## Offsets

Offset columns.

```
<Row>
  <Col xs={{ span: 3 }}></Col>
  <Col xs={{ span: 3, offset: 6 }}></Col>
  <Col xs={{ span: 3, offset: 3 }}></Col>
  <Col xs={{ span: 3 }}></Col>
</Row>
```

## Custom Columns

Only need 100 columns or only 2? Define any number of columns.

```
<Row cols={2}>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 1 }}></Col>
  <Col xs={{ span: 1 }}></Col>
</Row>
```

##Custom Breakpoints
The default breakpoints are { xs: 0, sm: 768, md: 1024, lg: 1920 }, you can override these using the breakpoints prop.

Changing the breakpoints will change the props <Col> accepts.

```
<Row breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
  <Col
    mobile={{ span: 12 }}
    tablet={{ span: 6 }}
    screen={{ span: 3 }}
  ></Col>
  <Col
    mobile={{ span: 12 }}
    tablet={{ span: 6 }}
    screen={{ span: 3 }}
  ></Col>
  <Col
    mobile={{ span: 12 }}
    tablet={{ span: 6 }}
    screen={{ span: 3 }}
  ></Col>
  <Col
    mobile={{ span: 12 }}
    tablet={{ span: 6 }}
    screen={{ span: 3 }}
  ></Col>
</Row>
```

## Nested Grids

You can nest rows. Nested rows will inherit context such as breakpoints,rootEM, and gutters from the parent grid.

```
<Row breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
  <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
    <Row>
      <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
      <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
    </Row>
  </Col>
  <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
    <Row>
      <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
      <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
    </Row>
  </Col>
</Row>
```

## Reverse & Order

Reverse all items in a row or set the order of a specific column.

```
<Row reverse={true}>
  <Col xs={{ span: 4 }}>
    <div css={example}>1</div>
  </Col>
  <Col xs={{ span: 4, order: -1 }}>
    <div css={example}>2</div>
  </Col>
  <Col xs={{ span: 4 }}>
    <div css={example}>3</div>
  </Col>
</Row>
```

## rootEM

If you have changed the default font-size on the html element your breakpoints might be off. Change the rootEM in Untitled Grid to fix this.

Why? Breakpoints in Untitled Grid are defined with pixels but applied using em units because em units respond correctly when the page is zoomed. To convert from pixels to em units, you can divide pixels by the base font-size which is sometimes called the rootEM.

```
<Row rootEM={18}>
  ...
</Row>
```

## Grid provider

Use a grid provider to set default properties for all grids in an application. These can be overwitten locally on the <Row> component if required.

```
import { GridProvider } from "untitled-grid";

<GridProvider breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
  <Row>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
  </Row>
  <Row>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
  </Row>
</GridProvider>
```
