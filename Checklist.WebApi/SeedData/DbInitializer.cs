using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Checklist.Business.Services;
using Checklist.Data.Entities;
using Checklist.WebApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Checklist.Data.Dtos;

namespace Checklist.WebApi.SeedData
{
    internal static class DbInitializer
    {
        public static async Task Initialize(DataContext context, ILogger<DataContext> logger, IHostingEnvironment env)
        {
            context.Database.EnsureCreated();
            // Look for any users.
            if (!context.Users.Any() && !context.CheckLists.Any()){
                await SeedUser(context, logger);
                await SeedChecklist(context, logger);
            }
            //await SeedChecklist(context, logger);
        }

        private static async Task SeedUser(DataContext context, ILogger<DataContext> logger)
        {
            var anyUserExist = await context.Users.AnyAsync();

            if (!anyUserExist)
            {
                string password = "dragon";
                string userPassword = "1111111";

                UserService userService = new UserService(context);
                await userService.Create(new User { FirstName = "Hub", LastName = "Administrator", Username = "Admin", Role = UserRole.Admin}, password);

                // Add Sub Admin and thr user
                for (int i = 1; i < 10; i++)
                {
                    //adds Sub Admin 
                    var subAdmin = await userService.Create(new User { FirstName = "Sub", LastName = $"Admin {i}", Username = $"Sub-Admin{i}", Role = UserRole.SubAdmin }, password);

                    //adds user 
                    if (i != 4) {
                        await userService.Create(new User { FirstName = "Hub", LastName = $" {i}", Username = $"Hub{i}", Role = UserRole.User, UserSubAdminId = subAdmin.Id}, userPassword);
                    }
                    else if(i == 4){
                        await userService.Create(new User { FirstName = "Hub", LastName = $"4hc", Username = $"Hub4hc", Role = UserRole.User, UserSubAdminId = subAdmin.Id }, userPassword);
                        await userService.Create(new User { FirstName = "Hub", LastName = $"4freight", Username = $"Hub4freight", Role = UserRole.User, UserSubAdminId = subAdmin.Id }, userPassword);
                        await userService.Create(new User { FirstName = "Hub", LastName = $"471alps", Username = $"Hub471alps", Role = UserRole.User, UserSubAdminId = subAdmin.Id }, userPassword);
                        await userService.Create(new User { FirstName = "Hub", LastName = $"4aerospace", Username = $"Hub4aerospace", Role = UserRole.User, UserSubAdminId = subAdmin.Id }, userPassword);
                    }
                }

            }
        }

        private static async Task SeedChecklist(DataContext context, ILogger<DataContext> logger)
        {
            try
            { 
                var anyCheckListExist = await context.CheckLists.AnyAsync();
                if (!anyCheckListExist)
                {
                    ChecklistService service = new ChecklistService(context);
                    int subAdminId = service.GetSubAdminIdByText("Sub-Admin1");

                    var checkListDto = new CheckListDto { HubName = "Indoctrination Form on Health, Safety and Environment for Hub 1, 健康安全与环境培训表",
                        Heading = "Emergency  Procedures/应急措施:", SubAdminId = subAdminId };
                    var checklist = await service.Create(checkListDto);

                    #region/* Emergency  Procedures */ 
                    var question2 = new Question { MainHeadingId = checklist.HeadingId, CheckListId = checklist.Id,
                        Content = "⦁  1st Alarm,warning alarm – Wait for further instruction.第一次的铃声是警告警报—请大家等待进一步的指示。", HeaderText = "In the event of fire emergency/如果遇到火灾,"
                    };
                    await service.CreateQuestion(question2);

                    var question3 = new Question { MainHeadingId = checklist.HeadingId, CheckListId = checklist.Id,
                        Content = "⦁	  2nd Alarm, evacuation alarm – Proceed to assembly area in an orderly manner/ 第二次的铃声是疏散警报—请大家有序的走到集合点。",
                    FooterText = "Note: Do not re-enter the premises or take the lift./注意：不要再次进入建筑物或搭乘电梯"
                    };
                    await service.CreateQuestion(question3);
                    #endregion

                    #region/* Company policies  */
                    var heading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "Company policies/公司的政策" };
                    var headingResult = await service.AddHeading(heading);

                    var question5 = new Question { MainHeadingId = headingResult.Id, CheckListId = checklist.Id,
                        Content = "Quality and performance policy/质量和绩效政策。"
                    };
                    await service.CreateQuestion(question5);

                    var question6 = new Question { MainHeadingId = headingResult.Id, CheckListId = checklist.Id,
                        Content = "Health, safety and environment policy/健康，安全和环境政策。"
                    };
                    await service.CreateQuestion(question6);

                     var question7 = new Question { MainHeadingId = headingResult.Id, CheckListId = checklist.Id,
                        Content = "Alcohol and substance abuse policy/酒精和药物滥用政策"
                     };
                    await service.CreateQuestion(question7);

                     var question8 = new Question { MainHeadingId = headingResult.Id, CheckListId = checklist.Id,
                        Content = "Security policy/ 保安政策。"
                     };
                    await service.CreateQuestion(question8);
                    #endregion

                    #region/* Associated Hazards - headings   */
                    var hazardHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "Associated Hazards/相关危害" };
                    var hazardResult = await service.AddHeading(hazardHeading);

                    var generalHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubHeading, Content = "General Hazard/般的危害" };
                    var generalResult = await service.AddHeading(generalHeading);

                    var specificHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubHeading, Content = "Site Specific Hazards or Concern/具体危害以及关注的问题" };
                    var specificResult = await service.AddHeading(specificHeading);

                    var healthHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubOfSubHeading, Content = "Health and Safety hazards/健康与安全危害类别:" };
                    var healtResult = await service.AddHeading(healthHeading);

                    var warehouseHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubOfSubHeading, Content = "Warehouse/仓库:" };
                    var warehouseResult = await service.AddHeading(warehouseHeading);

                    var bayHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubOfSubHeading, Content = "Loading bay/装卸区域:" };
                    var bayResult = await service.AddHeading(bayHeading);
                    #endregion

                    #region /*  Health and Safety hazards  */
                    var question9 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Electrical hazards/电气危害。"
                    };
                    await service.CreateQuestion(question9);

                    var question10 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Fire hazards/火灾。"
                    };
                    await service.CreateQuestion(question10);

                    var question11 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Mechanical hazards/机械危害。"
                    };
                    await service.CreateQuestion(question11);

                    var question12 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Falls from height/Falling objects/高空坠落/ 东西坠落。"
                    };
                    await service.CreateQuestion(question12);

                    var question13 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Ergonomic hazards (manual handling hazards)/人体工程学危害 (人工搬运危害)。"
                    };
                    await service.CreateQuestion(question13);

                    var question14 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Slip, trip and fall/滑倒，绊倒和跌倒。"
                    };
                    await service.CreateQuestion(question14);

                    var question15 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = generalResult.Id, 
                        SubOfSubHeadingId = healtResult.Id, Content = "Chemical hazards/化学危害"
                    };
                    await service.CreateQuestion(question15);
                    #endregion

                    #region /*  Warehouse  */
                    var question16 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = specificResult.Id, 
                        SubOfSubHeadingId = warehouseResult.Id, Content = "Forklift & MHE movement/叉车 & 物料搬运设备的移动。"
                    };
                    await service.CreateQuestion(question16);

                    var question17 = new Question {  MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = specificResult.Id, 
                        SubOfSubHeadingId = warehouseResult.Id, Content = "Charging of Forklift and MHE/叉车 & 物料搬运设备充电。"
                    };
                    await service.CreateQuestion(question17);

                    var question18 = new Question {  MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = specificResult.Id, 
                        SubOfSubHeadingId = warehouseResult.Id, Content = "Housekeeping/卫生管理。"
                    };
                    await service.CreateQuestion(question18);

                    var question19 = new Question {  MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = specificResult.Id, 
                        SubOfSubHeadingId = warehouseResult.Id, Content = "Charging of micro-battery/ 给微电池充电。"
                    };
                    await service.CreateQuestion(question19);
                    #endregion

                    #region /*  Loading bay  */
                    var question20 = new Question { MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = specificResult.Id, 
                        SubOfSubHeadingId = bayResult.Id, Content = "Trip and fall over dock leveler/ 被装卸跳板绊倒。"
                    };
                    await service.CreateQuestion(question20);

                    var question21 = new Question {  MainHeadingId = hazardResult.Id, CheckListId = checklist.Id, SubHeadingId = specificResult.Id, 
                        SubOfSubHeadingId = bayResult.Id, Content = "Loading and unloading hazards/上下货的危险。"
                    };
                    await service.CreateQuestion(question21);
                    #endregion

                    #region Risk Assessment
                    var riskHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "Risk Assessment/风险评估" };
                    var riskResult = await service.AddHeading(riskHeading);

                    var question22 = new Question {  MainHeadingId = riskHeading.Id, CheckListId = checklist.Id,
                        Content = "Understand hazard identification, risk evaluation and control measures/了解危害识别，评估风险，和控制措施。"
                    };
                    await service.CreateQuestion(question22);
                    #endregion

                    #region General Security, Health and Safety Rules
                    var securityHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "General Security, Health and Safety Rules/保安，健康与安全通则" };
                    var securityResult = await service.AddHeading(securityHeading);

                    var question23 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "No obstruction of Fire Fighting equipment, Emergency Exit/ stairway and Fireman Access point/消防设备,紧急撤离通道/楼梯以及消防员接入点不被阻碍。"
                    };
                    await service.CreateQuestion(question23);

                    var question24 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "No smoking in the warehouse and office area/仓库和办公室严禁吸烟。"
                    };
                    await service.CreateQuestion(question24);

                     var question25 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "No operating of forklift without valid forklift license/没有叉车驾驶执照严禁驾驶叉车。"
                     };
                    await service.CreateQuestion(question25);

                     var question26 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "Always observe warning signs and notices/观察和遵守警告指示牌。"
                     };
                    await service.CreateQuestion(question26);

                     var question27 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "Comply with good housekeeping and hygiene habits/保持良好的内务管理和卫生习惯。"
                     };
                    await service.CreateQuestion(question27);

                     var question28 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "Report all accident, injuries or near miss to your supervisor or manager/向主管或经理报告所有的事故,伤害或险兆事故。"
                     };
                    await service.CreateQuestion(question28);

                     var question29 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "After any injuries, consult first aiders immediately. If required, visit the doctor with your immediate supervisor/受伤后，立刻去找急救员。如果需要看医生，主管必须跟着去。"
                     };
                    await service.CreateQuestion(question29);

                     var question30 = new Question {  MainHeadingId = securityResult.Id, CheckListId = checklist.Id,
                        Content = "No entry into quarantine or unauthorized area without the escort from host/不进未经授权的区域。"
                     };
                    await service.CreateQuestion(question30);
                    #endregion

                    #region Environmental Rules
                    var environmentHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "Environmental Rules/环境通则" };
                    var environmentResult = await service.AddHeading(environmentHeading);

                    var question31 = new Question {  MainHeadingId = environmentResult.Id, CheckListId = checklist.Id,
                        Content = "Minimizing the environmental impact to our facility by reducing the consumption of natural resources, and the generation of waste and emissions related to the project, and practicing water conservation/通过减少对自然资源的耗损以及降低对废物的生成与排放来降低环境因素对设施的影响。 "
                    };
                    await service.CreateQuestion(question31);

                    var question32 = new Question {  MainHeadingId = environmentResult.Id, CheckListId = checklist.Id,
                        Content = "Switch off vehicle engine when doing loading and unloading to reduce pollution/在上下货时，必须把引擎关掉来减少污染。"
                    };
                    await service.CreateQuestion(question32);

                    var question33 = new Question {  MainHeadingId = environmentResult.Id, CheckListId = checklist.Id,
                        Content = "Comply with 3 Rs practice. (Reduce, Reuse & Recycle)/复3R准则 (减量化, 再使用, 循环处理)。"
                    };
                    await service.CreateQuestion(question33);
                    #endregion
                                        
                    #region Schedule of PPE in warehouse
                    var scheduleHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "Schedule of PPE in warehouse/仓库必须使用的个人防护装备:" };
                    var scheduleResult = await service.AddHeading(scheduleHeading);

                    var mandatoryHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubHeading, Content = "Mandatory/必须:" };
                    var mandatoryResult = await service.AddHeading(mandatoryHeading);

                    var ifHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.SubHeading, Content = "If applicable/如有需要:" };
                    var ifResult = await service.AddHeading(ifHeading);

                    var question34 = new Question { MainHeadingId = scheduleResult.Id, CheckListId = checklist.Id, SubHeadingId = mandatoryResult.Id,
                        Content = "Safety boots/安全鞋"
                    };
                    await service.CreateQuestion(question34);

                    var question35 = new Question { MainHeadingId = scheduleResult.Id, CheckListId = checklist.Id, SubHeadingId = mandatoryResult.Id,
                        Content = "Visibility Vest/ Bolloré Uniform/高能见度安全背心/ 公司制服"
                    };
                    await service.CreateQuestion(question35);
                    
                     var question36 = new Question { MainHeadingId = scheduleResult.Id, CheckListId = checklist.Id, SubHeadingId = ifResult.Id,
                        Content = "Gloves/手套"
                     };
                    await service.CreateQuestion(question36);
                    #endregion

                    #region/* Legal Requirement  */
                    var legalHeading = new Heading { CheckListId = checkListDto.Id, HeadingType = HeadingType.MainHeading, Content = "Legal Requirement/法律要求" };
                    var legalHeadingResult = await service.AddHeading(legalHeading);

                    var question37 = new Question { MainHeadingId = legalHeadingResult.Id, CheckListId = checklist.Id,
                        Content = "The main legal requirements that were complied (Fire Safety Act, Workplace Safety & Health act, Environmental Protection & Management Act)/主要法律要求已被遵守 (消防安全条例，工作安全于健康条例，环境保护和管理条例)。"
                    };
                    await service.CreateQuestion(question37);

                    
                    #endregion

                }
            }
            catch(Exception ex)
            {
                logger.LogError("Error in checklist seed: ", ex);
            }

        }


    }
}
