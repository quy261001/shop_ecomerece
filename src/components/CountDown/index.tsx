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
export function CountDown({countdownTimestampMs}: countdownTimestampMsProps) {
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
    <Flex align="center" gap={18}>
      <Flex vertical>
        <div className="text-xs font-medium">Days</div>
        <div className="text-[32px] font-bold tracking-[1.28px]">
          {remainingTime.days}
        </div>
      </Flex>
      <Flex vertical gap={8}>
        <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
        <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
      </Flex>
      <Flex vertical>
        <div className="text-xs font-medium">Hours</div>
        <div className="text-[32px] font-bold tracking-[1.28px]">
          {remainingTime.hours}
        </div>
      </Flex>
      <Flex vertical gap={8}>
        <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
        <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
      </Flex>
      <Flex vertical>
        <div className="text-xs font-medium">Minutes</div>
        <div className="text-[32px] font-bold tracking-[1.28px]">
          {remainingTime.minutes}
        </div>
      </Flex>
      <Flex vertical gap={8}>
        <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
        <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
      </Flex>
      <Flex vertical>
        <div className="text-xs font-medium">Seconds</div>
        <div className="text-[32px] font-bold tracking-[1.28px]">
          {remainingTime.seconds}
        </div>
      </Flex>
    </Flex>
  );
}
