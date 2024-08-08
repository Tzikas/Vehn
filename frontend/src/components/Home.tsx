// // @ts-nocheck
// import React, { useState } from "react";
// import DatePicker from "react-multi-date-picker";
// import { ReactWeekTimeRangePicker } from '@marinos33/react-week-time-range-picker'

// export default function Example() {
// 	const handleSelectTimeRange = (selectedData) => {
// 		console.log(selectedData)
// 	}
// 	return <ReactWeekTimeRangePicker onMouseDown={() => console.log('adfas')} hasHalfHour={true} selectedData={[]} selectTimeRange={handleSelectTimeRange} />;
// }



// @ts-nocheck
// jsx/tsx
import ReactWeekTimeRangePicker from 'react-week-time-range-picker-og'
console.log('adfdf')
const Test = () => {
	// 获取选中的值
	const handleSelectTimeRange = (selectedData) => {
		console.log(selectedData)
	}
	return <ReactWeekTimeRangePicker hasHalfHour={true} selectedData={[]} selectTimeRange={handleSelectTimeRange} />
}

export default Test