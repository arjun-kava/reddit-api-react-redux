import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import expect from 'expect'

import * as actions from '../src/actions'
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should create an action to select subreddit', () => {
            const subreddit = 'reactjs'
            const expectedAction = {
                type: actions.SELECT_SUBREDDIT,
                subreddit
            }
            expect(actions.selectSubreddit(subreddit)).toEqual(expectedAction)
    })
    it('should create an action to invalidate subreddit', () => {
        const subreddit = 'reactjs'
        const expectedAction = {
            type: actions.INVALIDATE_SUBREDDIT,
            subreddit
        }
        expect(actions.invalidateSubreddit(subreddit)).toEqual(expectedAction)
    })
})
/*
describe('async actions', () => {
    afterEach(() =>{
        fetchMock.restore()
    })

    it('should create an action to fetch posts if needed', () => {
        const subreddit = 'reactjs'
        const mockData = { 
            kind: 'Listing',
            data:{
                modhash: 'fy8ko21qj604c4b6de687518e7e960ec7c3909359cee332abe',
                dist: 1,
                children: [
                    {
                        kind: 't3',
                        data:{
                            "approved_at_utc": null,
                            "subreddit": "reactjs",
                            "selftext": "**🎉 Happy New Year All! 🎉** \n\nNew month means a new thread 😎 - [December 2018](https://www.reddit.com/r/reactjs/comments/a2oxbv/beginners_thread_easy_questions_december_2018/) and [November 2018](https://www.reddit.com/r/reactjs/comments/9t5sic/beginners_thread_easy_questions_november_2018/)  here. \n\nGot questions about React or anything else in its ecosystem? Stuck making progress on your app? Ask away! We’re a friendly bunch. \n\nNo question is too simple. 🤔\n\n---------------------------------------------\n\n🆘 **Want Help with your Code?** 🆘\n\n* **Improve your chances** by putting a minimal example to either [JSFiddle](https://jsfiddle.net/Luktwrdm/) or [Code Sandbox](https://codesandbox.io/s/new). Describe what you want it to do, and things you've tried. Don't just post big blocks of code!\n\n* **Pay it forward!** Answer questions even if there is already an answer - multiple perspectives can be very helpful to beginners. Also there's no quicker way to learn than [being wrong on the Internet](https://xkcd.com/386/). \n\n**Have a question regarding code / repository organization?**\n\nIt's most likely answered within this [tweet](https://twitter.com/dan_abramov/status/1027245759232651270?lang=en).\n\n---------------------------------------------------\n\n**New to React?**\n\n🆓 Here are great, **free** resources! 🆓\n\n* [Create React App](https://facebook.github.io/create-react-app/)\n* [Read the **official** Getting Started page](https://reactjs.org/docs/getting-started.html) on the docs.\n* [/u/acemarke](https://www.reddit.com/u/acemarke)'s [suggested resources for learning React](http://blog.isquaredsoftware.com/2017/12/blogged-answers-learn-react/)\n* [Kent Dodd's Egghead.io course](http://kcd.im/beginner-react)\n* [Tyler McGinnis' 2018 Guide](https://medium.freecodecamp.org/a-comprehensive-guide-to-react-js-in-2018-ba8bb6975597)\n* [Codecademy's React courses](https://www.codecademy.com/catalog/language/javascript)\n* [Scrimba's React Course](https://scrimba.com/g/glearnreact)\n* [Robin Wieruch's Road to React](https://roadtoreact.com)\n\n-----\n\nAny ideas/suggestions to improve this thread - feel free to comment here or ping /u/timmonsjg :)",
                            "author_fullname": "t2_2aun3ozb",
                            "saved": false,
                            "mod_reason_title": null,
                            "gilded": 0,
                            "clicked": false,
                            "title": "Beginner's Thread / Easy Questions (January 2019)",
                            "link_flair_richtext": [],
                            "subreddit_name_prefixed": "r/reactjs",
                            "hidden": false,
                            "pwls": 6,
                            "link_flair_css_class": null,
                            "downs": 0,
                            "thumbnail_height": null,
                            "hide_score": false,
                            "name": "t3_abld37",
                            "quarantine": false,
                            "link_flair_text_color": "dark",
                            "author_flair_background_color": null,
                            "subreddit_type": "public",
                            "ups": 14,
                            "domain": "self.reactjs",
                            "media_embed": {},
                            "thumbnail_width": null,
                            "author_flair_template_id": null,
                            "is_original_content": false,
                            "user_reports": [],
                            "secure_media": null,
                            "is_reddit_media_domain": false,
                            "is_meta": false,
                            "category": null,
                            "secure_media_embed": {},
                            "link_flair_text": null,
                            "can_mod_post": false,
                            "score": 14,
                            "approved_by": null,
                            "thumbnail": "self",
                            "edited": 1546452036,
                            "author_flair_css_class": null,
                            "author_flair_richtext": [],
                            "gildings": {
                                "gid_1": 0,
                                "gid_2": 0,
                                "gid_3": 0
                            },
                            "content_categories": null,
                            "is_self": true,
                            "mod_note": null,
                            "created": 1546401647,
                            "link_flair_type": "text",
                            "wls": 6,
                            "banned_by": null,
                            "author_flair_type": "text",
                            "contest_mode": false,
                            "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;&lt;strong&gt;🎉 Happy New Year All! 🎉&lt;/strong&gt; &lt;/p&gt;\n\n&lt;p&gt;New month means a new thread 😎 - &lt;a href=\"https://www.reddit.com/r/reactjs/comments/a2oxbv/beginners_thread_easy_questions_december_2018/\"&gt;December 2018&lt;/a&gt; and &lt;a href=\"https://www.reddit.com/r/reactjs/comments/9t5sic/beginners_thread_easy_questions_november_2018/\"&gt;November 2018&lt;/a&gt;  here. &lt;/p&gt;\n\n&lt;p&gt;Got questions about React or anything else in its ecosystem? Stuck making progress on your app? Ask away! We’re a friendly bunch. &lt;/p&gt;\n\n&lt;p&gt;No question is too simple. 🤔&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;🆘 &lt;strong&gt;Want Help with your Code?&lt;/strong&gt; 🆘&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;p&gt;&lt;strong&gt;Improve your chances&lt;/strong&gt; by putting a minimal example to either &lt;a href=\"https://jsfiddle.net/Luktwrdm/\"&gt;JSFiddle&lt;/a&gt; or &lt;a href=\"https://codesandbox.io/s/new\"&gt;Code Sandbox&lt;/a&gt;. Describe what you want it to do, and things you&amp;#39;ve tried. Don&amp;#39;t just post big blocks of code!&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;strong&gt;Pay it forward!&lt;/strong&gt; Answer questions even if there is already an answer - multiple perspectives can be very helpful to beginners. Also there&amp;#39;s no quicker way to learn than &lt;a href=\"https://xkcd.com/386/\"&gt;being wrong on the Internet&lt;/a&gt;. &lt;/p&gt;&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;&lt;strong&gt;Have a question regarding code / repository organization?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;It&amp;#39;s most likely answered within this &lt;a href=\"https://twitter.com/dan_abramov/status/1027245759232651270?lang=en\"&gt;tweet&lt;/a&gt;.&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;&lt;strong&gt;New to React?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;🆓 Here are great, &lt;strong&gt;free&lt;/strong&gt; resources! 🆓&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\"https://facebook.github.io/create-react-app/\"&gt;Create React App&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"https://reactjs.org/docs/getting-started.html\"&gt;Read the &lt;strong&gt;official&lt;/strong&gt; Getting Started page&lt;/a&gt; on the docs.&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"https://www.reddit.com/u/acemarke\"&gt;/u/acemarke&lt;/a&gt;&amp;#39;s &lt;a href=\"http://blog.isquaredsoftware.com/2017/12/blogged-answers-learn-react/\"&gt;suggested resources for learning React&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://kcd.im/beginner-react\"&gt;Kent Dodd&amp;#39;s Egghead.io course&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"https://medium.freecodecamp.org/a-comprehensive-guide-to-react-js-in-2018-ba8bb6975597\"&gt;Tyler McGinnis&amp;#39; 2018 Guide&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"https://www.codecademy.com/catalog/language/javascript\"&gt;Codecademy&amp;#39;s React courses&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"https://scrimba.com/g/glearnreact\"&gt;Scrimba&amp;#39;s React Course&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"https://roadtoreact.com\"&gt;Robin Wieruch&amp;#39;s Road to React&lt;/a&gt;&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;Any ideas/suggestions to improve this thread - feel free to comment here or ping &lt;a href=\"/u/timmonsjg\"&gt;/u/timmonsjg&lt;/a&gt; :)&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                            "likes": null,
                            "suggested_sort": "new",
                            "banned_at_utc": null,
                            "view_count": null,
                            "archived": false,
                            "no_follow": false,
                            "is_crosspostable": true,
                            "pinned": false,
                            "over_18": false,
                            "media_only": false,
                            "link_flair_template_id": null,
                            "can_gild": true,
                            "spoiler": false,
                            "locked": false,
                            "author_flair_text": null,
                            "visited": false,
                            "num_reports": null,
                            "distinguished": "moderator",
                            "subreddit_id": "t5_2zldd",
                            "mod_reason_by": null,
                            "removal_reason": null,
                            "link_flair_background_color": "",
                            "id": "abld37",
                            "is_robot_indexable": true,
                            "report_reasons": null,
                            "author": "timmonsjg",
                            "num_crossposts": 0,
                            "num_comments": 36,
                            "send_replies": true,
                            "whitelist_status": "all_ads",
                            "mod_reports": [],
                            "author_patreon_flair": false,
                            "author_flair_text_color": null,
                            "permalink": "/r/reactjs/comments/abld37/beginners_thread_easy_questions_january_2019/",
                            "parent_whitelist_status": "all_ads",
                            "stickied": true,
                            "url": "https://www.reddit.com/r/reactjs/comments/abld37/beginners_thread_easy_questions_january_2019/",
                            "subreddit_subscribers": 85187,
                            "created_utc": 1546372847,
                            "media": null,
                            "is_video": false
                        }
                    }
                ],
                after: 't3_ac68f9',
                before: null
            }
        }
        fetchMock.getOnce(`/${subreddit}.json`, {
            body: mockData,
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: actions.REQUEST_POSTS },
            { 
                type: actions.RECEIVE_POSTS, 
                subreddit,
                posts:[],
                receivedAt: Date.now()
            }
        ]
        const store = mockStore({ postsBySubreddit:{
            subreddit: null
        } })

        return store.dispatch(actions.fetchPostsIfNeeded(subreddit)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
        
    })
})
*/