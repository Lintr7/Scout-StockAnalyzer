import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css sheets/global2.css';
import TinyLineChart from '../components/lines';
import TinyLineChart2 from '../components/lines2';
import TinyLineChart3 from '../components/lines3';
import Slideshow from '../components/carousel';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/spotlight-new';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth');
  };

  return (
    <div className='wrapper'>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <Spotlight />
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Card className="fadeLeft" sx={{
          position: 'absolute',
          zIndex: '1',
          animation: 'fadeLeft 1s',
          background: 'rgb(51, 65, 94)',
          marginTop: '21vh',
          right: '8%',
          height: '14em',
          width: '26em',
          padding: '20px',
          display: 'inline-block',
          borderRadius: '20px'
        }}>
          <CardContent>
            
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(47, 199, 148)',
                  color: 'white',
                  padding: '0.9em 2.7em',
                  fontSize: '0.80rem',
                  marginLeft: '-19.3em',
                  marginTop: '11.7em',
                  '&:hover': {
                    backgroundColor: '#white',
                  }
                }}
                onClick={handleLoginClick}
              >
                Search
              </Button>

            <h1 style={{
              position: 'relative',
              fontSize: '2.7rem',
              color: 'rgb(252, 252, 211)',
              marginTop: '-4.7em',
              textAlign: 'left',
              marginLeft: '0.1em',
              lineHeight: '1.1em',
              fontFamily: "'Times New Roman', serif"
            }}>
              Instant updates <br /> on your favorite <br /> S&P 500 Companies
            </h1>
          </CardContent>
        </Card>

        <button className="btnLoginPopup"
        onClick={handleLoginClick}
        >
          Login
        </button>
        <img src='/logoScout.png' alt='logo' style={{ position: 'absolute', top: '0.69em', width: '2.5em', height: 'auto', left: '1.89em' }} />
        <h2 style={{ fontSize: '1.8em', color: '#9167fb', userSelect: 'none', position: 'absolute', top: '0.6em', left: '2.5em', margin: '0' }}>Scout</h2>

        <h2 className="fadeUpText" style={{
          fontSize: '10.3vh',
          maxWidth: '130vh',
          userSelect: 'none',
          position: 'absolute',
          top: '0.2em',
          left: '1.49em',
          backgroundImage: 'linear-gradient(to bottom right, rgb(100, 198, 240), rgb(143, 245, 249))',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          zIndex: '1'
        }}>
          Market Insights <br /> Powered by AI
        </h2>

        <div style={{ width: '100vw', height: '100vh', transform: 'scale(1.025)', marginTop: '-15em' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-13em',
            left: '0',
            filter: `drop-shadow(0 0 12px rgba(170, 100, 255, 0.45)) drop-shadow(0 0 22px rgba(170, 100, 255, 0.35))`,
          }}>
            <TinyLineChart />
          </div>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-65em',
            left: '0',
            filter: `drop-shadow(0 0 12px rgba(144, 238, 144, 0.45)) drop-shadow(0 0 22px rgba(144, 238, 144, 0.35))`
          }}>
            <TinyLineChart2 />
          </div>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-59.5em',
            left: '0',
            filter: `drop-shadow(0 0 12px rgba(0, 255, 255, 0.45)) drop-shadow(0 0 22px rgba(0, 255, 255, 0.35))`
          }}>
            <TinyLineChart3 />
          </div>
        </div>

        <div style={{ position: 'fixed', left: '0em', bottom: '-0.4em', zIndex: '5' }}>
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
