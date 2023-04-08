//
export default Title;
// 0    /// Title ///

function Title() {
  return (
    <caption className="title">
      <TitleCaption1 />
      <TitleCaption2 />
      <TitleCaption3 />
    </caption>
  );
}
/// Title caption ///
// 1 //
function TitleCaption1() {
  return (
    <div className="title-caption">
      <CircleNum1 />
      <h3 className="title-h3">Actionable insights</h3>
      <p className="p title-p">
        Optimize your products, improve customer satisfaction and stay ahead of
        the competition with our product data analytics.
      </p>
    </div>
  );
}

// 1.1
function CircleNum1() {
  return (
    <div className="circle">
      <h1 className="circle-text">1</h1>
    </div>
  );
}
// 2 //
function TitleCaption2() {
  return (
    <div className="title-caption">
      <CircleNum2 />
      <h3 className="title-h3">Data-driven decisions</h3>
      <p className="p title-p">
        Make data-driven decisions with our product data analytics. Our
        AI-generated reports help you unlock insights hidden in your product
        data.
      </p>
    </div>
  );
}

// 2.1
function CircleNum2() {
  return (
    <div className="circle">
      <h1 className="circle-text">2</h1>
    </div>
  );
}

// 3 //
function TitleCaption3() {
  return (
    <div className="title-caption">
      <CircleNum3 />
      <h3 className="title-h3">Always affordable</h3>
      <p className="p title-p">
        Always affordable pricing that scales with your business. Get
        top-quality product data analytics services without hidden costs or
        unexpected fees.
      </p>
    </div>
  );
}

// 3.1
function CircleNum3() {
  return (
    <div className="circle">
      <h1 className="circle-text">3</h1>
    </div>
  );
}
