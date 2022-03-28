import React from 'react'

const Live = () => {
  return (
    <div>
      <div id="app" v-cloak>
        <header className="header-wrap">
          <div className="header-row flex-row flex-middle flex-space">
            <div className="if-small">
              <div className="form-input dark">
                <div className="push-right">🔎</div>
                <input
                  type="text"
                  v-model="search"
                  placeholder="Search token..."
                />
              </div>
              <div className="text-primary if-medium">
                <h1 className="text-nowrap text-condense shadow-text">
                  Crypto 24h Change
                </h1>
              </div>
              <div className="flex-row flex-middle">
                <div className="dropdown">
                  <div className="form-input text-nowrap shadow-box">
                    ▼ 
                  </div>
                  <ul>
                      
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Live
