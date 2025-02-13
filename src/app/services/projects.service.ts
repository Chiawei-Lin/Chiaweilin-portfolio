import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { CategoryTypes } from '../models/category-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 1',
        'zh': '項目1'
      },
      mainImg: 'images/projects/project1/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      processImages: [
        'images/projects/project1/process-img-1.jpg',
        'images/projects/project1/process-img-2.jpg',
        'images/projects/project1/process-img-3.jpg',
        'images/projects/project1/process-img-4.jpg',
        'images/projects/project1/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project1/styleframe-img-1.jpg',
        'images/projects/project1/styleframe-img-2.jpg',
        'images/projects/project1/styleframe-img-3.jpg',
        'images/projects/project1/styleframe-img-4.jpg',
        'images/projects/project1/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ClientWork
    },
    {
      id: 2,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 2',
        'zh': '項目2'
      },
      mainImg: 'images/projects/project2/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project2/process-img-1.jpg',
        'images/projects/project2/process-img-2.jpg',
        'images/projects/project2/process-img-3.jpg',
        'images/projects/project2/process-img-4.jpg',
        'images/projects/project2/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project2/styleframe-img-1.jpg',
        'images/projects/project2/styleframe-img-2.jpg',
        'images/projects/project2/styleframe-img-3.jpg',
        'images/projects/project2/styleframe-img-4.jpg',
        'images/projects/project2/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.MotionGraphics
    },
    {
      id: 3,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 3',
        'zh': '項目3'
      },
      mainImg: 'images/projects/project3/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project3/process-img-1.jpg',
        'images/projects/project3/process-img-2.jpg',
        'images/projects/project3/process-img-3.jpg',
        'images/projects/project3/process-img-4.jpg',
        'images/projects/project3/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project3/styleframe-img-1.jpg',
        'images/projects/project3/styleframe-img-2.jpg',
        'images/projects/project3/styleframe-img-3.jpg',
        'images/projects/project3/styleframe-img-4.jpg',
        'images/projects/project3/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ThreeDimensionalAnimations
    },
    {
      id: 4,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 4',
        'zh': '項目4'
      },
      mainImg: 'images/projects/project4/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project4/process-img-1.jpg',
        'images/projects/project4/process-img-2.jpg',
        'images/projects/project4/process-img-3.jpg',
        'images/projects/project4/process-img-4.jpg',
        'images/projects/project4/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project4/styleframe-img-1.jpg',
        'images/projects/project4/styleframe-img-2.jpg',
        'images/projects/project4/styleframe-img-3.jpg',
        'images/projects/project4/styleframe-img-4.jpg',
        'images/projects/project4/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.TwoDimensionalAnimations
    },
    {
      id: 5,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 5',
        'zh': '項目5'
      },
      mainImg: 'images/projects/project5/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project5/process-img-1.jpg',
        'images/projects/project5/process-img-2.jpg',
        'images/projects/project5/process-img-3.jpg',
        'images/projects/project5/process-img-4.jpg',
        'images/projects/project5/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project5/styleframe-img-1.jpg',
        'images/projects/project5/styleframe-img-2.jpg',
        'images/projects/project5/styleframe-img-3.jpg',
        'images/projects/project5/styleframe-img-4.jpg',
        'images/projects/project5/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.VideoProduction
    },
    {
      id: 6,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 6',
        'zh': '項目6'
      },
      mainImg: 'images/projects/project6/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project6/process-img-1.jpg',
        'images/projects/project6/process-img-2.jpg',
        'images/projects/project6/process-img-3.jpg',
        'images/projects/project6/process-img-4.jpg',
        'images/projects/project6/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project6/styleframe-img-1.jpg',
        'images/projects/project6/styleframe-img-2.jpg',
        'images/projects/project6/styleframe-img-3.jpg',
        'images/projects/project6/styleframe-img-4.jpg',
        'images/projects/project6/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ClientWork
    },
    {
      id: 7,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 7',
        'zh': '項目7'
      },
      mainImg: 'images/projects/project7/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project7/process-img-1.jpg',
        'images/projects/project7/process-img-2.jpg',
        'images/projects/project7/process-img-3.jpg',
        'images/projects/project7/process-img-4.jpg',
        'images/projects/project7/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project7/styleframe-img-1.jpg',
        'images/projects/project7/styleframe-img-2.jpg',
        'images/projects/project7/styleframe-img-3.jpg',
        'images/projects/project7/styleframe-img-4.jpg',
        'images/projects/project7/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ThreeDimensionalAnimations
    },
    {
      id: 8,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 8',
        'zh': '項目8'
      },
      mainImg: 'images/projects/project8/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project8/process-img-1.jpg',
        'images/projects/project8/process-img-2.jpg',
        'images/projects/project8/process-img-3.jpg',
        'images/projects/project8/process-img-4.jpg',
        'images/projects/project8/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project8/styleframe-img-1.jpg',
        'images/projects/project8/styleframe-img-2.jpg',
        'images/projects/project8/styleframe-img-3.jpg',
        'images/projects/project8/styleframe-img-4.jpg',
        'images/projects/project8/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.MotionGraphics
    },
    {
      id: 9,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 9',
        'zh': '項目9'
      },
      mainImg: 'images/projects/project9/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project9/process-img-1.jpg',
        'images/projects/project9/process-img-2.jpg',
        'images/projects/project9/process-img-3.jpg',
        'images/projects/project9/process-img-4.jpg',
        'images/projects/project9/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project9/styleframe-img-1.jpg',
        'images/projects/project9/styleframe-img-2.jpg',
        'images/projects/project9/styleframe-img-3.jpg',
        'images/projects/project9/styleframe-img-4.jpg',
        'images/projects/project9/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.VideoProduction
    },
    {
      id: 10,
      longDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      },
      shortDescription: {
        'en': 'Lorem ipsum dolor sit amet',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      projectMembers: {
        'en': 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum',
        'zh': '鳥彩言海九在丟點背，們已內後記星良'
      },
      title: {
        'en': 'Project 10',
        'zh': '項目10'
      },
      mainImg: 'images/projects/project10/main-img.jpg',
      processDescription: {
        'en': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
        'zh': '鳥彩言海九在丟點背，們已內後記星良。青功刀至發早吹苦屋害爪村姐叫洋弟世申已回，道足停快。發因拉央母他二成王主弓虎「首勿人葉告九春扒汁」斥打問唱清沒門都亮。半怪元別下姐許再子「羊姐清得拉年安童布」植幾去國人高旦助七寸問把黃東登冬子申，尾斗故京升活首乍大日免九首玉了、停打牙土進！動也你九着陽多停新種子哭汁那休就媽，師早朱世和。游學米抱別而我幾貓候珠這秋還母，者造媽員語春波「公意坐壯寸」由呀可升且看常空綠抓們安後重嗎，河車頁白丟即己掃，陽蝶造背巾干娘元呀！同兌貝花星師左馬跳立肖怕士飯波次多向，它央七正包，已片丟，信每村詞好。'
      }, processImages: [
        'images/projects/project10/process-img-1.jpg',
        'images/projects/project10/process-img-2.jpg',
        'images/projects/project10/process-img-3.jpg',
        'images/projects/project10/process-img-4.jpg',
        'images/projects/project10/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project10/styleframe-img-1.jpg',
        'images/projects/project10/styleframe-img-2.jpg',
        'images/projects/project10/styleframe-img-3.jpg',
        'images/projects/project10/styleframe-img-4.jpg',
        'images/projects/project10/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ClientWork
    },
  ];

  constructor () { }

  getProjectById = (id: number) => this.getProjects('all').find(project => project.id === id);

  getProjects = (categoryType: CategoryTypes | 'all') =>
    categoryType === 'all'
      ? structuredClone(this.projects)
      : structuredClone(this.projects)
        .filter(project => project.categoryType === categoryType);
}
