import { Typography } from "antd"
import AppLayout from "../../components/AppLayout"

const About = () => {
    return (
        <>
            <AppLayout>
                <div className="" style={{padding: 20}}>
                    <Typography.Title level={2}>About</Typography.Title>

                    <Typography.Paragraph>There are some called Muhammad. Even only in Bangladesh. Before, my name was Abu Taher – and I only existed under this name once. But this is another story.</Typography.Paragraph>
                    <Typography.Paragraph>What is true then as now: I am a designer and developer. To be precise, I solve people&apos;s problems thus and so that they get a smile on their face afterward look more beautiful than before or perform not like before. Maybe more practical to use. Websites, user interfaces, apps, and things like that. Some think I&apos;m totally creative and just one of those people; who make everything they put their hands on stunning. I see myself more as a problem solver who lives out his trained profession as a web developer with ambition and still wants to learn more today. I&apos;m more of a freethinker than a web developer. But that&apos;s just terminology anyway.</Typography.Paragraph>
                </div>
            </AppLayout>
        </>
    )
}

export default About