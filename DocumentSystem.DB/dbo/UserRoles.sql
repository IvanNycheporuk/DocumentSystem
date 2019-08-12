CREATE TABLE [dbo].[UserRoles]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserId] INT NOT NULL, 
    [RoleId] INT NOT NULL, 
    CONSTRAINT [FK_UserRoles_ToUsers] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id]), 
    CONSTRAINT [FK_UserRoles_ToRoles] FOREIGN KEY (RoleId) REFERENCES [Roles]([id])
)
