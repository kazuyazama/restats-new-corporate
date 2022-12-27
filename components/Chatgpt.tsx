import React, { useState } from 'react';

function Chatgpt() {
  // ドロワーメニューを表示するかどうかを管理するためのstate
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ドロワーメニューを表示するためのボタン
  const menuButton = (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
      Menu
    </button>
  );

  // ドロワーメニューのHTMLマークアップ
  const menu = (
    <div>
      <ul>
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
      </ul>
    </div>
  );

  // スタイルを定義
  const menuStyles = {
    display: isMenuOpen ? 'block' : 'none'
  };

  return (
    <div>
      {menuButton}
      <nav style={menuStyles}>
        {menu}
      </nav>
    </div>
  );
}

export default Chatgpt;
