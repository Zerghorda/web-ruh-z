QUnit.module("tesztelés", function () {
  QUnit.test("mükszk e a navtöltése?"),
    function (assert) {
      assert.ok(navfeltoltes(), "Van");
    };
  QUnit.test("fügvény e ez ?"),
    function (assert) {
      assert.ok(typeof navfeltoltes() == "function", "fügvény");
    };
});
