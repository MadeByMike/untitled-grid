/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import ReactDOM from "react-dom";
import { Row, Col, GridProvider } from "untitled-grid";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsxSyntax from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("jsx", jsxSyntax);

const page = {
  margin: "50px auto",
  width: "85%",
  maxWidth: 1300
};

const section = {
  marginBottom: 100
};

const example = {
  display: "block",
  minHeight: 30,
  backgroundColor: "tomato",
  marginBottom: 10,
  textAlign: "center",
  fontWeight: "bold"
};

const nestedExample = {
  ...example,
  backgroundColor: "palegoldenrod",
  marginTop: 10
};

const globalStyles = {
  body: {
    background: "#276ebd",
    color: "#fff",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    fontSize: "1.2em",
    lineHeight: "1.5",
    marginTop: 20,
    padding: 5
  },
  pre: { borderRadius: 20, margin: "30px 0 !important" },
  code: {
    fontSize: "1em",
    border: "solid rgba(255,255,255,0.4) 1px",
    borderRadius: 2,
    padding: 5
  },
  "pre code": { fontSize: ".9em", border: "none", borderRadius: 0 },
  a: { color: "white" }
};

const H2 = ({ title }) => (
  <h2 id={title.replace(" ", "-").toLowerCase()}>{title} </h2>
);

ReactDOM.render(
  <div css={page}>
    <Global styles={globalStyles} />
    <section css={section}>
      <Row>
        <img src="/logo.svg" css={{ margin: 10 }} />
        <Col>
          <h1 css={{ fontSize: "3em", marginBottom: 0, marginTop: "0.5em" }}>
            Untitled Grid
          </h1>
          <p css={{ marginLeft: 8, marginTop: 5 }}>
            Untitled grid can be a standard 12 column grid system or a versatile
            grid utility.
          </p>
        </Col>
      </Row>
    </section>

    <section css={section}>
      <H2 title="Usage" />
      <SyntaxHighlighter language="jsx" style={prism}>
        {`npm install untitled-grid`}
      </SyntaxHighlighter>
      <p>or</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`yarn add untitled-grid`}
      </SyntaxHighlighter>
    </section>

    <section css={section}>
      <H2 title="Auto columns" />
      <p>Evenly distribute items in a row without props.</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row>
  <Col></Col>
  <Col></Col>
  <Col></Col>
</Row>`}
      </SyntaxHighlighter>
      <Row>
        <Col>
          <div css={example} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
      </Row>
    </section>

    <section css={section}>
      <H2 title="Responsive properties" />
      <p>All properties are applied within breakpoint props.</p>
      <p>
        Breakpoints are mobile first, so the <code>xs</code> prop will apply to
        all sizes, until larger breakpoint is used.
      </p>
      <p>
        You can also use <a href="#custom-breakpoints">custom breakpoints</a>.
      </p>
      <p>Use the span property to define the width of cols.</p>

      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row>
  <Col
    xs={{ span: 12 }}
    sm={{ span: 6 }}
    md={{ span: 4 }}
    lg={{ span: 2 }}
  ></Col>
  ...
</Row>`}
      </SyntaxHighlighter>
      <Row>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <div css={example} />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <div css={example} />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <div css={example} />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <div css={example} />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <div css={example} />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <div css={example} />
        </Col>
      </Row>
    </section>

    <section css={section}>
      <H2 title="Justify" />
      <p>Justify items in a row to the left, right, or center.</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row xs={{ justify: "start" }}>
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
</Row>`}
      </SyntaxHighlighter>
      <Row xs={{ justify: "start" }}>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
      </Row>
      <Row xs={{ justify: "center" }}>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
      </Row>
      <Row xs={{ justify: "end" }}>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
      </Row>
    </section>

    <section css={section}>
      <H2 title="Align" />
      <p>
        The height of a row is always determined by the content. Where the
        height differs, align other items to the top, middle or bottom of a row.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row xs={{ justify: "top" }}>
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
</Row>`}
      </SyntaxHighlighter>
      <Row xs={{ align: "top" }}>
        <Col>
          <div css={{ ...example, height: 120 }} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
      </Row>
      <Row xs={{ align: "middle" }}>
        <Col>
          <div css={{ ...example, height: 120 }} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
      </Row>
      <Row xs={{ align: "bottom" }}>
        <Col>
          <div css={{ ...example, height: 120 }} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
        <Col>
          <div css={example} />
        </Col>
      </Row>
    </section>
    <section css={section}>
      <H2 title="Offsets" />
      <p>Offset columns.</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row>
  <Col xs={{ span: 3 }}></Col>
  <Col xs={{ span: 3, offset: 6 }}></Col>
  <Col xs={{ span: 3, offset: 3 }}></Col>
  <Col xs={{ span: 3 }}></Col>
</Row>`}
      </SyntaxHighlighter>
      <Row>
        <Col xs={{ span: 3 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 3, offset: 6 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 3, offset: 3 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 3 }}>
          <div css={example} />
        </Col>
      </Row>
    </section>
    <section css={section}>
      <H2 title="Custom Columns" />
      <p>Only need 100 columns or only 2? Define any number of columns.</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row cols={2}>
  <Col xs={{ span: 2 }}></Col>
  <Col xs={{ span: 1 }}></Col>
  <Col xs={{ span: 1 }}></Col>
</Row>`}
      </SyntaxHighlighter>
      <Row cols={2}>
        <Col xs={{ span: 2 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 1 }}>
          <div css={example} />
        </Col>
        <Col xs={{ span: 1 }}>
          <div css={example} />
        </Col>
      </Row>
    </section>
    <section css={section}>
      <H2 title="Custom Breakpoints" />
      <p>
        The default breakpoints are{" "}
        <code>{`{ xs: 0, sm: 768, md: 1024, lg: 1920 }`}</code>, you can
        override these using the <code>breakpoints</code> prop.{" "}
      </p>
      <p>
        Changing the <code>breakpoints</code> will change the props{" "}
        <code>{`<Col>`}</code> accepts.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
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
</Row>`}
      </SyntaxHighlighter>
      <Row breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
        <Col mobile={{ span: 12 }} tablet={{ span: 6 }} screen={{ span: 3 }}>
          <div css={example} />
        </Col>
        <Col mobile={{ span: 12 }} tablet={{ span: 6 }} screen={{ span: 3 }}>
          <div css={example} />
        </Col>
        <Col mobile={{ span: 12 }} tablet={{ span: 6 }} screen={{ span: 3 }}>
          <div css={example} />
        </Col>
        <Col mobile={{ span: 12 }} tablet={{ span: 6 }} screen={{ span: 3 }}>
          <div css={example} />
        </Col>
      </Row>
    </section>
    <section css={section}>
      <H2 title="Nested Grids" />
      <p>
        You can nest rows. Nested rows will inherit context such as{" "}
        <a href="#custom-breakpoints">breakpoints</a>,
        <a href="#rootem">rootEM</a>, and <a href="#gutters">gutters</a> from
        the parent grid.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
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
</Row>`}
      </SyntaxHighlighter>
      <Row breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
        <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
          <div css={example}>
            <Row>
              <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
                <div css={nestedExample} />
              </Col>
              <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
                <div css={nestedExample} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
          <div css={example}>
            <Row>
              <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
                <div css={nestedExample} />
              </Col>
              <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
                <div css={nestedExample} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
    <section css={section}>
      <H2 title="Reverse &amp; Order" />
      <p>Reverse all items in a row or set the order of a specific column.</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row reverse={true}>
  <Col xs={{ span: 4 }}>
    <div css={example}>1</div>
  </Col>
  <Col xs={{ span: 4, order: -1 }}>
    <div css={example}>2</div>
  </Col>
  <Col xs={{ span: 4 }}>
    <div css={example}>3</div>
  </Col>
</Row>`}
      </SyntaxHighlighter>
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
    </section>
    <section css={section}>
      <H2 title="rootEM" />
      <p>
        If you have changed the default font-size on the html element your
        breakpoints might be off. Change the <code>rootEM</code> in Untitled
        Grid to fix this.
      </p>
      <p>
        Why? Breakpoints in Untitled Grid are defined with pixels but applied
        using <code>em</code> units because <code>em</code> units respond
        correctly when the page is zoomed. To convert from pixels to{" "}
        <code>em</code> units, you can divide pixels by the base font-size which
        is sometimes called the <code>rootEM</code>.
      </p>

      <SyntaxHighlighter language="jsx" style={prism}>
        {`<Row rootEM={18}>
  ...
</Row>`}
      </SyntaxHighlighter>
    </section>
    <section css={section}>
      <H2 title="Grid provider" />
      <p>
        Use a grid provider to set default properties for all grids in an
        application. These can be overwitten locally on the{" "}
        <code>{`<Row>`}</code> component if required.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {`import { GridProvider } from "untitled-grid";

<GridProvider breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
  <Row>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
  </Row>
  <Row>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
    <Col mobile={{ span: 12 }} tablet={{ span: 6 }}></Col>
  </Row>
</GridProvider>`}
      </SyntaxHighlighter>
      <GridProvider breakpoints={{ mobile: 0, tablet: 768, screen: 1024 }}>
        <Row>
          <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
            <div css={example} />
          </Col>
          <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
            <div css={example} />
          </Col>
        </Row>
        <Row>
          <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
            <div css={example} />
          </Col>
          <Col mobile={{ span: 12 }} tablet={{ span: 6 }}>
            <div css={example} />
          </Col>
        </Row>
      </GridProvider>
    </section>
  </div>,
  document.querySelector("#root")
);
