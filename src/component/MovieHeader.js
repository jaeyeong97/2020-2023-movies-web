import { useState } from "react"

const MovieHeader = ({ setCategory, search, handleSearch }) => {
    const [btnColor, setBtnColor] = useState('전체')
    const btnCate = i => {
        setCategory(i)
        setBtnColor(i)
    }
    return (
        <div className="movieHeader">
            <h1>2020~2023년도 흥행영화</h1>
            <div className="flex_wrap">
                <div className="years_wrap">
                    <select onChange={(event) => btnCate(event.target.value)} value={btnColor}>
                        <option value="전체">전체</option>
                        <option value="2023">2023년</option>
                        <option value="2022">2022년</option>
                        <option value="2021">2021년</option>
                        <option value="2020">2020년</option>
                    </select>
                </div>
                <div className="selected">
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="제목을 입력하세요."
                    />
                </div>
            </div>
        </div>
    )
}
export default MovieHeader;