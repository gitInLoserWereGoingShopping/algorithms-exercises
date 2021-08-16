import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(array) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  // for (let i = 1; i < nums.length; i++) {
  //   let numberToInsert = nums[i];
  //   let j = 0;
  //   for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
  //     nums[j + 1] = nums[j];
  //   }
  //   nums[j + 1] = numberToInsert;
  // }
  // return nums;
  snapshot(array);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
