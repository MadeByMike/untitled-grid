// These styles are way more "functional" than I would like
// And it's against what I normally would recommend.
// In my defence, it's really hard to make flexible utility
// like this, with declarative styles.

// Help me improve it!

const JUSTIFY = {
  start: {
    justifyContent: "flex-start",
    textAlign: "start"
  },
  center: {
    justifyContent: "center",
    textAlign: "center"
  },
  end: { justifyContent: "flex-end" },
  around: { justifyContent: "space-around" },
  between: { justifyContent: "space-between" }
};

const ALIGN = {
  top: {
    alignItems: "flex-start"
  },
  middle: {
    alignItems: "center"
  },
  bottom: { alignItems: "flex-end" }
};

export const getColumnStyles = (
  { reverse, breakpoints, cols, rootEM, gutter },
  props
) => {
  let sizeStyles = {};
  Object.keys(breakpoints).forEach(key => {
    if (props[key]) {
      const { span, order, offset } = props[key];
      const styles = {
        // Only add properties if they exist.
        // "undefined" will unset the previous responsive properties
        ...(span && { flexBasis: `${(100 / cols) * span}%` }),
        ...(span && { maxWidth: `${(100 / cols) * span}%` }),
        ...(span && { flexGrow: undefined }),
        ...(order && { order: order }),
        ...(offset && { marginLeft: `${(100 / cols) * offset}%` })
      };

      sizeStyles =
        breakpoints[key] === 0
          ? { ...sizeStyles, ...styles }
          : {
              ...sizeStyles,
              [`@media screen and (min-width: ${breakpoints[key] /
                rootEM}em)`]: styles
            };
    }
  });

  return {
    boxSizing: "border-box",
    flex: "0 0 auto",
    paddingRight: gutter / 2,
    paddingLeft: gutter / 2,
    flexDirection: reverse ? "column-reverse" : "row",
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: "100%",
    ...sizeStyles
  };
};

const getJustify = key => (key ? (JUSTIFY[key] ? JUSTIFY[key] : key) : {});
const getAlign = key => (key ? (ALIGN[key] ? ALIGN[key] : key) : {});

export const getRowStyles = (
  { reverse, breakpoints, rootEM, gutter },
  props
) => {
  const gutterCompensation = (gutter / 2) * -1;

  let sizeStyles = {};
  Object.keys(breakpoints).forEach(key => {
    if (props[key]) {
      const { align, justify } = props[key];
      const styles = {
        ...getJustify(justify),
        ...getAlign(align)
      };

      sizeStyles =
        breakpoints[key] === 0
          ? { ...sizeStyles, ...styles }
          : {
              ...sizeStyles,
              [`@media screen and (min-width: ${breakpoints[key] /
                rootEM})em`]: styles
            };
    }
  });

  return {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    marginRight: gutterCompensation,
    marginLeft: gutterCompensation,
    flexDirection: reverse ? "row-reverse" : "row",
    ...sizeStyles
  };
};
