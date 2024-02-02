"use client";
import { getRemainingTimeUntilMsTimestamp } from "@/app/utils";
import { Flex } from "antd";
import {useState, useEffect} from 'react';
const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}
interface countdownTimestampMsProps {
  countdownTimestampMs: number;
}
export function CountDownB({countdownTimestampMs}: countdownTimestampMsProps) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown: number) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

  return (
    <Flex align="center" gap={24}>
      <Flex vertical justify="center" align="center" className='bg-white h-[62px] w-[62px] rounded-full'>
        <div className="text-base font-bold tracking-[1.28px]">
          {remainingTime.days}
        </div>
        <div className="text-xs font-medium">Days</div>
      </Flex>
      <Flex vertical justify="center" align="center" className='bg-white h-[62px] w-[62px] rounded-full'>
        <div className="text-base font-bold tracking-[1.28px]">
          {remainingTime.hours}
        </div>
        <div className="text-xs font-medium">Hours</div>
      </Flex>
      <Flex vertical justify="center" align="center" className='bg-white h-[62px] w-[62px] rounded-full'>
        <div className="text-base font-bold tracking-[1.28px]">
          {remainingTime.minutes}
        </div>
        <div className="text-xs font-medium">Minutes</div>
      </Flex>
      <Flex vertical justify="center" align="center" className='bg-white h-[62px] w-[62px] rounded-full'>
        <div className="text-base font-bold tracking-[1.28px]">
          {remainingTime.seconds}
        </div>
        <div className="text-xs font-medium">Seconds</div>
      </Flex>
    </Flex>
  );
}
