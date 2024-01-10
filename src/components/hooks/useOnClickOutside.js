import { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        // listener함수의 내용을 보면,,,
        const listener = (event) => {
            // [ref.current]가 없거나, 
            if(!ref.current || ref.current.contains(event.target)) {
                return;
            }
            // 아니면 핸들러 함수 작동
            handler();
        };

        // mousedown 이나 touchstart 될 때 listener 함수가 발동...
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        }
        // eslint-disable-next-line
    }, [ref, handler]);

}

export default useOnClickOutside