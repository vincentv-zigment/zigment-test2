import FacebookScript from './FacebookScript';
import GoogleAnalytics from './GoogleAnalyticsScript';
import PosthogScript from './PostHogs';

const AllScripts = () => {


    return <>
        <GoogleAnalytics />
        <PosthogScript />
        <FacebookScript />
    </>;
};

export default AllScripts;
