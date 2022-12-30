import React from 'react'
import { Routes,	Route }	from "react-router-dom";

import Community from '../js/Screens/Community';
import MyPage from '../js/Screens/MyPage';

export const Navigation = () => {

    return (
        <Routes>
            <Route path="/" element={<Community />} />
            <Route path="/mypage" element={<MyPage />} />
        </Routes>
  )
}
