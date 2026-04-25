import type { Logger } from './logger'

export type PathName = 'home' | 'appData' | 'userData' | 'sessionData' | 'temp' | 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos' | 'recent'

export abstract class PluginContext {
  /**
   * Render a URL in the assistant web browser and get the response content
   * 
   * @param url - The URL to render
   * @returns The rendered content (like HTML)
   */
  abstract renderUrl(url: string): Promise<string>

  /** Get Aloha default logger instance 
   *  You can use it to log messages from your plugin
   * 
   * @returns The logger instance
  */
  abstract getLogger(): Logger

  /**
   * Get an absolute path to a system directory
   * 
   * @param name - Directory name: 'home' | 'appData' | 'userData' | 'sessionData' | 'temp' | 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos' | 'recent'
   * @returns The absolute path to the directory
   */
  abstract getPath(name: PathName): string
}