import * as React from 'react';
import './style.scss'
import api from '../../../utils/api';
import { timeParse, formatDate } from '../../../utils/util'
import Page from '../../../components/page'



class TeamChoseItem extends React.PureComponent{
    render() {
        return(
            <div className="admin-team-item" onClick={() => {location.href = '/timeline?teamId=' + this.props.teamId }}>
                <img className="team-img" src={this.props.teamImg}></img>
                <div className="team-name">{this.props.teamName}</div>
            </div>
        )
    }
}


class File extends React.PureComponent{
    // typeMap = {
    //     'CREATE_TOPIC': '创建了讨论：',
    //     'REPLY_TOPIC': '回复了讨论：',
    // }

    render() {
        if(this.props.appearance){
            return(
                <div className="project">
                        <div className="file">
                            <i className="fileicon iconfont icon-yun"></i>
                        </div>
                        <div>
                        {this.props.name}
                        </div>
                </div>
            )
        }
                
        else{
            return (
                <div className="smallproject">
                        <div className="smallfile">
                            <i className="smallfileicon iconfont icon-yun"></i>
                            {this.props.name}
                        </div>
                </div>
            )
        }
    }
}

export default class Project extends React.Component{
    componentDidMount = async() => {
        // await this.initFileData()
        // this.initTeamList()
    }

    initFileData = async () => {
        // const queryTeamId = this.props.location.query.teamId

        // const result = await api('/api/timeline/getTimeline', {
        //     method: 'POST',
        //     body: queryTeamId ? {
        //         teamId: queryTeamId
        //     } : {}
        // })
        // this.setState({
        //     newsList: result.data
        // }, () => {
        //     this.appendToShowList(this.state.newsList)
        // })

    }
    
    state = {
        projects:{
            projectKeyList:[1,2],
            1:{
                name:"项目一",
            },
            2:{
                name:"项目二",
            }
        },
        
        newsList: [],
        bigicon:true,
        // showList的数据结构长这样
        // showList: {
        //     timeKeyList: ['20170101', '20170102'],
        //     '20170101': {
        //         'teamKeyList': ['teamId1','teamId2']                
        //         'teamId1' : {
        //             teamName: '这是团队名称111',
        //             newsList: []
        //         },
        //         'teamId2' : {
        //             teamName: '这是团队名称222',
        //             newsList: []
        //         },
        //     },
        // }
        showList: {
            keyList : [],
        },

        showTeamFilter: false,
        teamList: [],
    }
    bigger = () => {
        this.setState((prevState) => ({
          bigicon: false,
        })) 
    }
    smaller = () => {
        this.setState((prevState) => ({
          bigicon: true,
        })) 
    }
    render() {
        return (   
            <Page className="projects-page">
                <div className="news-list page-wrap">
                    <div className="menu">
                        <div className="carete">
                            <div className="create" onClick={() => {this.locationTo('/project-create')}}> 新建项目 </div>|
                            <i className="icons iconfont icon-manage_fill" onClick={this.smaller}></i>
                            <i className="icons iconfont icon-createtask" onClick={this.bigger}></i>
                        </div>
                    </div> 
                    <div className="projects">
                    {
                        this.state.projects.projectKeyList.map((item) => {
                            return (
                                <File key={"项目"+item} name={this.state.projects[item].name} appearance={this.state.bigicon}/>
                            )
                        })
                    }
                    </div>
                </div>

                
            </Page>
        )
    }
}


