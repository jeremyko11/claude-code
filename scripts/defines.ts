/**
 * Shared MACRO define map used by both dev.ts (runtime -d flags)
 * and build.ts (Bun.build define option).
 *
 * Each value is a JSON-stringified expression that replaces the
 * corresponding MACRO.* identifier at transpile / bundle time.
 */
export function getMacroDefines(): Record<string, string> {
    return {
        "MACRO.VERSION": JSON.stringify("2.1.888"),
        "MACRO.BUILD_TIME": JSON.stringify(new Date().toISOString()),
        "MACRO.FEEDBACK_CHANNEL": JSON.stringify(""),
        "MACRO.ISSUES_EXPLAINER": JSON.stringify(""),
        "MACRO.NATIVE_PACKAGE_URL": JSON.stringify(""),
        "MACRO.PACKAGE_URL": JSON.stringify(""),
        "MACRO.VERSION_CHANGELOG": JSON.stringify(""),
        // Feature flags - Enhanced features
        "MACRO.feature_CHICAGO_MCP": "true",
        "MACRO.feature_TEMPLATES": "true",
        "MACRO.feature_BG_SESSIONS": "true",
        "MACRO.feature_CONTEXT_COLLAPSE": "true",
        "MACRO.feature_TOKEN_BUDGET": "true",
        "MACRO.feature_TRANSCRIPT_CLASSIFIER": "true",
        "MACRO.feature_TEAMMEM": "true",
        "MACRO.feature_KAIROS": "true",
        "MACRO.feature_TERMINAL_PANEL": "true",
        "MACRO.feature_WORKFLOW_SCRIPTS": "true",
        "MACRO.feature_MCP_SKILLS": "true",
        "MACRO.feature_MESSAGE_ACTIONS": "true",
        "MACRO.feature_QUICK_SEARCH": "true",
        // Remote execution features
        "MACRO.feature_SSH_REMOTE": "true",
        "MACRO.feature_CCR_REMOTE_SETUP": "true",
        "MACRO.feature_AGENT_TRIGGERS_REMOTE": "true",
        // Computer Use
        "MACRO.feature_WEB_BROWSER_TOOL": "true",
    };
}
