'use client'
import React, { useEffect, useState } from 'react'
import Split from 'react-split'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import Playground from './Playground/Playground'
import { problems } from '@/app/utils/problems'
import Confetti from 'react-confetti'
import { ToastContainer } from 'react-toastify'

const Workspace = ({pid, problem}: any) => {
  const [success, setSuccess] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Split className='split' minSize={0} sizes={[50, 50]} direction="horizontal" style={{ display: 'flex' }}>
        <div style={{ overflow: 'auto' }}>
          <ProblemDescription problem={problem} pid={pid}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Playground problem={problems[pid]} pid={pid} setSuccess={setSuccess}/>
          <ToastContainer/>
          {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
        </div>
      </Split>
    </div>
  )
}

export default Workspace