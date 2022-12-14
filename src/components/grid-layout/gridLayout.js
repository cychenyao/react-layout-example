import GridLayout from "react-grid-layout";

const GridLayout1 = (props) => {
   // {lg: layout1, md: layout2, ...}
  //  const layout = [
  //   { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  //   { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  //   { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  //   { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  //   { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
  // ];
  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
  ];
      return (
        <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
          <div key="blue-eyes-dragon" className="GridItemWrapper">
            <div className="GridItemContent">Blue Eyes Dragon</div>
          </div>
          <div key="dark-magician" className="GridItemWrapper">
            <div className="GridItemContent">Dark Magician</div>
          </div>
          <div key="kuriboh" className="GridItemWrapper">
            <div className="GridItemContent">Kuriboh</div>
          </div>
          <div key="spell-caster" className="GridItemWrapper">
            <div className="GridItemContent">Spell Caster</div>
          </div>
          <div key="summoned-skull" className="GridItemWrapper">
            <div className="GridItemContent">Summoned Skull</div>
          </div>
      </GridLayout>
      );
}
export default GridLayout1;