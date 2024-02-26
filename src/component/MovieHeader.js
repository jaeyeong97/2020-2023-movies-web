import { useState } from "react"

const MovieHeader = ({ setCategory, category, search, handleSearch }) => {
    const [btnColor, setBtnColor] = useState('전체')
    const btnCate = i => {
        setCategory(i)
        setBtnColor(i)
    }
    return (
        <div className="movieHeader">
            <h1><a href="">2020~2023년도 흥행영화</a></h1>
            <div className="years_wrap">
                <button onClick={() => btnCate('전체')} style={{textDecoration : btnColor === '전체' ? 'underline' : 'none', color : btnColor === '전체' ? '#0f0f0f' : '#747474'}}>전체</button>
                <button onClick={() => btnCate('2023')} style={{textDecoration : btnColor === '2023' ? 'underline' : 'none', color : btnColor === '2023' ? '#0f0f0f' : '#747474'}}>2023년</button>
                <button onClick={() => btnCate('2022')}  style={{textDecoration : btnColor === '2022' ? 'underline' : 'none', color : btnColor === '2022' ? '#0f0f0f' : '#747474'}}>2022년</button>
                <button onClick={() => btnCate('2021')}  style={{textDecoration : btnColor === '2021' ? 'underline' : 'none', color : btnColor === '2021' ? '#0f0f0f' : '#747474'}}>2021년</button>
                <button onClick={() => btnCate('2020')}  style={{textDecoration : btnColor === '2020' ? 'underline' : 'none', color : btnColor === '2020' ? '#0f0f0f' : '#747474'}}>2020년</button>
            </div>
            <div className="selected">
                <span>현재 선택된 년도 : {category}</span>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="제목을 입력하세요."
                />
            </div>
        </div>
    )
}
export default MovieHeader;