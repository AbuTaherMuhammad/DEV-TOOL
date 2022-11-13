import { Button, notification } from "antd"
import { NotificationPlacement } from "antd/lib/notification"
import { FC, useEffect } from "react"

const openNotice = () => {
    notification.info({
        message: 'We need your support',
        description: "Need github star, please click the button to help us increase star count!",
        placement:'bottomLeft',
        style: {
            // background: "red"
        }
    })
}

const GithubNotice: FC = () => {
    useEffect(() => {
        openNotice()

        return () => {
            notification.destroy()
        }
    })

    return (<></>)
}

export default GithubNotice