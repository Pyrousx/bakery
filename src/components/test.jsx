import React from 'react';

const Header = () => {
  const redbg = 'background-color: red';
  // style={{backgroundColor: 'red'}}
  return (
    <header className="bg-cyan-400 text-white" >
      <div className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Your Logo</div>
          <div>
            <button className="bg-blue-500 text-white rounded-lg p-2 md:p-4 text-5xl lg:p-6">
              Button 1
            </button>
            <button className="bg-green-500 text-white rounded-lg p-2 md:p-4 lg:p-6 ml-4">
              Button 2
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;